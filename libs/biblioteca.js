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
async function getFormattedBookList(conn, m, from) {
  try {
     const books = await Book.find({});
    if (books.length === 0) return m.reply('No hay libros disponibles.') 
    const sortedBooks = sortBooks(books);
    const formattedBookList = [];
    for (const book of sortedBooks) {
      const bookTitle = book.title;
      const bookPart = extractBookPart(bookTitle); // extrae las partes (e.j., "1", "2")
      const formattedBookEntry = `* **${bookTitle}** (${bookPart || ''})`;
      formattedBookList.push(formattedBookEntry);
    }
    const formattedList = `**Lista de libros disponibles:**\n${formattedBookList.join('\n')}`;
    await conn.sendMessage(m.chat, {text: formattedList }, { quoted: m })
  } catch (error) {
    console.error(error);
    return m.reply('')}}

function sortBooks(books) {
   books.sort((a, b) => a.genre.toLowerCase().localeCompare(b.genre.toLowerCase()));

  function sortWithinGenre(genreBooks) {
    return genreBooks.sort((a, b) => {
      const partA = extractBookPart(a.title);
      const partB = extractBookPart(b.title);
      if (!partA && !partB) return 0;
      if (!partA) return 1;
      if (!partB) return -1;
      return partA.localeCompare(partB);
    })}
const booksByGenre = books.reduce((acc, book) => {
    const genre = book.genre;
    acc[genre] = acc[genre] || [];
    acc[genre].push(book);
    return acc;
  }, {});
  for (const genre in booksByGenre) {
    booksByGenre[genre] = sortWithinGenre(booksByGenre[genre]);
  }
  return Object.values(booksByGenre).flat();
}
function extractBookPart(title) {
  const regex = /\s*Parte\s*(\d+)\s*$/i;
  const match = title.match(regex);
  return match ? match[1] : null;
}

// Function buscar libro
async function searchBooks(text, conn, m) {
  if (!text) return m.reply('No se proporcionó un término de búsqueda.');
  const searchQuery = text
  const trimmedQuery = searchQuery.trim();  
  const searchCriteria = buildSearchCriteriaTitle(trimmedQuery);
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
  const formattedResults = books.map(book => `* *${book.title}* - ${book.link}`);
    const t = `*¡Título(s) coincidente(s)!*\n${formattedResults.join('\n')}`;
    await conn.sendMessage(m.chat, {text: t}, { quoted: m }) }

function buildSearchCriteriaTitle(trimmedQuery) {
  const criteria = {
    $or: [
      { title: { $regex: `^${trimmedQuery}.*`, $options: 'i' } }, 
      { title: { $regex: `.*${trimmedQuery}.*`, $options: 'i' } },
    ],
  };
  return criteria;
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
  const titleLine = sanitizedBodyLines.find((line) => line.startsWith('Título:'));
  const linkLine = sanitizedBodyLines.find((line) => line.startsWith('Link:'));
  const authorLine = sanitizedBodyLines.find((line) => line.startsWith('Autor:'));
  const genreLine = sanitizedBodyLines.find((line) => line.startsWith('Género:'));
  if (!titleLine || !linkLine || !authorLine || !genreLine) return m.reply('Error: Debe completar todos los campos: título, link, autor, género');
  const title = titleLine.replace('Título: ', '').trim();
  const link = linkLine.replace('Link: ', '').trim();
  const author = authorLine.replace('Autor: ', '').trim();
  const genre = genreLine.replace('Género: ', '').trim();
  if (!isValidMediafireLink(link)) return m.reply('Error: El enlace debe ser de Mediafire.');
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
    m.reply('Error al agregar el libro. Intente nuevamente.')}}
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
