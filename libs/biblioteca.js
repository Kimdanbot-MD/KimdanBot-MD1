require('../kim.js')
const mongoose = require('mongoose')
const uri = "mongodb+srv://kimdan:n94FpKdCpRxU2K4W@kim.gcodxfl.mongodb.net/Kim?retryWrites=true&w=majority"
mongoose.connect(uri)
const db = mongoose.connection;
db.on('error', (error) => {console.error('Error al conectar con la base de datos:', error)});
db.once('open', () => {console.log('Base de datos conectada');});

const fs = require("fs")
const path = require("path")
const chalk = require("chalk");
const axios = require('axios')
const cheerio = require('cheerio')
const _ = require('lodash');
const { Schema } = mongoose;

const bookSchema = new Schema({
  title: {
    type: String,
    required: true,
    trim: true
  },
  link: {
    type: String,
    required: true,
    trim: true
  }, 
  author: {
    type: String,
    trim: true
  },
  genre: {
    type: String,
    trim: true
  },
  isAvailable: {
    type: Boolean,
    default: true
  }
}, { collection: 'Libros', versionKey: false });

const Book = mongoose.model('Kim.Libros', bookSchema);

// Function lista de libros 
async function getFormattedBookList(conn, m, from, useExternal = false) {
  try {
    const localBooks = await Book.find({});
    let allBooks = localBooks;
    if (useExternal) {
      try {
        const externalBooksResponse = await axios.get('https://api.zioo.space/download/books/data');
        const externalBooks = externalBooksResponse.data;
        allBooks = [...localBooks, ...externalBooks];
      } catch (error) {
        console.error('Error fetching external books:', error);
          return m.reply('Hubo un error al obtener libros de una fuente externa.');
      }}
const filteredBooks = allBooks.filter((book) => Book.find({}));
if (filteredBooks.length === 0) {
      return m.reply('No hay libros disponibles.');
    }
const sortedBooks = filteredBooks.sort((a, b) => {
      const genreComparison = (a.genre?.localeCompare(b.genre) || 1);
      if (genreComparison !== 0) return genreComparison;
      return a.title.localeCompare(b.title);
    });
    const groupedBooks = _.groupBy(sortedBooks, (book) => book.genre || 'Sin género');
    const formattedList = [];
    for (const [genre, books] of Object.entries(groupedBooks)) {
      formattedList.push(`\n*Género:* ${genre}`);
      books.sort((a, b) => {
        const titleComparison = a.title.localeCompare(b.title);
        if (titleComparison !== 0) return titleComparison;
        const partA = extractBookPart(a.title);
        const partB = extractBookPart(b.title);
        if (partA && partB) return parseInt(partA) - parseInt(partB);
        return partB ? 1 : -1;
      }).forEach((book) => {
        formattedList.push(`* ${book.title}`);
      })}
    await conn.sendMessage(m.chat, { text: "`LISTA DE LIBROS`" + formattedList.join('\n') }, { quoted: m });
  } catch (error) {
    console.error('Error obtaining book list:', error);
    return m.reply('Error al obtener la lista de libros.');
  }}
function sortBooksByPart(books) {
  return books.sort((a, b) => {
    const partA = extractBookPart(a.title);
    const partB = extractBookPart(b.title);
    if (partA && partB) return parseInt(partA) - parseInt(partB);
    return partB ? 1 : -1;
  });
}

function extractBookPart(title) {
  const regex = /\d+-\d+|\d+$/i; 
  const match = title.match(regex);
  return match ? match[0] : null;
}

// Function buscar libro
async function searchBooks(text, conn, m, from) {
  if (!text) return m.reply('No se proporcionó un término de búsqueda.');
  const trimmedQuery = text.toLowerCase().trim();
  const searchCriteria = { title: { $regex: `.*${trimmedQuery}.*`, $options: 'i' } };
  const searchOptions = { limit: 100 };
  let books = [];
  try {
    const internalBooks = await Book.find(searchCriteria, searchOptions);
    books = books.concat(internalBooks);
    if (shouldUseExternalAPI()) {
      const externalBooks = await fetchExternalBooks(trimmedQuery);
      books = books.concat(externalBooks);
    }
  } catch (error) {
    console.error(error);
    if (error.name === 'MongoError' && error.code === 11000) {
      return m.reply('Error interno en la base de datos. Intenta nuevamente más tarde.');
    }
    return m.reply('Error al buscar libros. Intenta nuevamente.');
  }
  if (books.length === 0) {
    return m.reply('No se encontraron libros que coincidan con tu búsqueda.');
  }
  if (shouldDeduplicateResults()) {
    books = deduplicateBooks(books);
  }
  if (shouldSortResults()) {
    books = sortBooks(books);
  }
  const formattedResults = books.map((book) => `* *${book.title}* - ${book.link}`);
  const responseText = `*¡Título(s) coincidente(s)!*\n${formattedResults.join('\n')}`;
  await conn.sendMessage(m.chat, { text: responseText }, { quoted: m });
}
function fetchExternalBooks(query) {
  // ... (Lógica para obtener libros de una API externa)
  // Ejemplo:
  // const respuesta = await axios.get('https://external-api.com/books?q=' + consulta);
  // const librosExternos = respuesta.data.libros;
  // return librosExternos;
  return []; // Espacio reservado para la integración con la API externa
}
function shouldUseExternalAPI() {
  // Implementar lógica para determinar si se debe usar la integración con la API externa
  return false; // Valor predeterminado a falso por ahora
}
function deduplicateBooks(books) {
  // ... (Lógica para deduplicar libros basado en un identificador único)
  // Ejemplo:
  // const librosUnicos = new Set(libros.map(libro => libro.id));
  // return Array.from(librosUnicos);
  return books; // Espacio reservado para la lógica de deduplicación
}
function shouldDeduplicateResults() {
  // Implementar lógica para determinar si se debe realizar la deduplicación
  return false; // Valor predeterminado a falso por ahora
}
function sortBooks(books) {
  //books.sort((a, b) => a.title.localeCompare(b.title));
  return books;
  }
function shouldSortResults() {
  return false;
}    

// Function agregar libro
async function addBook(body, text, conn, m, from) {
  const sanitizedBody = body.replace(/[^a-zA-Z0-9\s:;\.\-_\/]+/g, '');
  const sanitizedBodyLines = sanitizedBody.split('\n');
  const bookInfo = sanitizedBodyLines.map((line) => line.trim());
  if (bookInfo.length < 3) {
    return m.reply('Error: Debe proporcionar al menos 3 campos separados por coma (,)');
  }
  const title = bookInfo[0];
  const link = bookInfo[1];
  const genre = bookInfo[2];
  if (!title) return m.reply('Error: El campo "Título" es obligatorio.');
  if (!link) return m.reply('Error: El campo "Link" es obligatorio.');
  if (!genre) return m.reply('Error: El campo "Género" es obligatorio.');
  if (!isValidMediafireLink(link)) {
    return m.reply('Error: El enlace debe ser de Mediafire.');
  }
  const existingBooks = await Book.find({
    $or: [
      { title: { $regex: `^${title}$`, $options: 'i' } },
      { link: { $regex: `^${link}$`, $options: 'i' } },
    ]});
  if (existingBooks.length > 0) {
    const existingBookTitles = existingBooks.map((book) => book.title);
    const duplicateTitleMessage = `Ya existe(n) libro(s) con título(s) similar(es): ${existingBookTitles.join(', ')}`;
    const duplicateLinkMessage = 'El enlace ya existe en la biblioteca.';
    return m.reply(existingBooks.some((book) => book.link === link) ? duplicateLinkMessage : duplicateTitleMessage);
  }
  const author = bookInfo.length > 3 ? bookInfo[3] : 'NN';
  try {
    const newBook = new Book({
      title,
      link,
      author,
      genre,
    });
    await newBook.save();
    m.reply(`Se agregó el libro: ${title}`);
  } catch (error) {
    console.error(error);
    m.reply('Error al agregar el libro. Intente nuevamente.');
  }}
function isValidMediafireLink(linkString) {
  const mediafireRegex = /https?:\/\/(www\.)?mediafire\.com\/file\/(.*)/;
  return mediafireRegex.test(linkString);
}

// Function actualizar 
async function updateBookAvailability(bookId, isAvailable) {
  try {
    await Book.findByIdAndUpdate(bookId, { isAvailable });
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

// Function eliminar libro
async function deleteBook(bookId) {
  try {
    await Book.findByIdAndDelete(bookId);
    return true;
  } catch (error) {
    console.error(error);
    return false;
  }
}

module.exports = {
  Book,
  getFormattedBookList,
  searchBooks,
  addBook,
  updateBookAvailability,
  deleteBook
};
