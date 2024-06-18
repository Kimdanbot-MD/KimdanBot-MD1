 require('../kim.js')
const { mongoose } = require('mongoose')
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
const { ObjectId } = require('bson');
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
    const interactiveMessagePayload = {
      body: { text: `**LISTA DE LIBROS**` },
      nativeFlowMessage: {
        buttons: [], 
        messageParamsJson: "",
      }};
    const groupedBooks = _.groupBy(sortedBooks, (book) => book.genre || 'Sin género');
    for (const [genre, books] of Object.entries(groupedBooks)) {
      const section = {
        title: genre, 
        rows: books.map((book) => ({
          header: "nose",
          title: book.title,
          description: `libro-${book.id}`,
          id: `comando`, 
        }))};
      interactiveMessagePayload.nativeFlowMessage.buttons.push({
        name: "single_select",
        buttonParamsJson: JSON.stringify({
          title: "libros", 
          sections: [section],
        })})}
    await conn.relayMessage(from, { interactiveMessage: interactiveMessagePayload }, {});
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
    const internalBooks = await Book.find(searchCriteria);
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
  if (text.split('\n').length < 4) {
    return m.reply('Error: Debe proporcionar al menos 4 campos separados por renglon');
  }
  const sanitizedBody = body.replace(/[^\w\s:;\.\-_\/+\p{Latin}]+/g, '');
  const sanitizedBodyLines = sanitizedBody.split('\n');
const bookInfo = sanitizedBodyLines.map((line) => line.trim().split(' ').join(' '));
if (!bookInfo[1]) {
    return m.reply('Error: El campo "Título" es obligatorio.');
  }
  if (!bookInfo[2]) {
    return m.reply('Error: El campo "Link" es obligatorio.');
  }
  if (!bookInfo[3]) {
    return m.reply('Error: El campo "autor" es obligatorio si no sabes el nombre pon NN.');
  }
  if (!bookInfo[4]) {
    return m.reply('Error: El campo "Género" es obligatorio.');
  }
  if (!isValidMediafireLink(bookInfo[2])) {
    return m.reply('Error: El enlace debe ser de Mediafire.');
  }
  const existingBooks = await Book.find({
    $or: [
      { title: { $regex: `^${bookInfo[1]}$`, $options: 'i' } },
      { link: { $regex: `^${bookInfo[2]}$`, $options: 'i' } },
    ],
  });
  if (existingBooks.length > 0) {
    const duplicateMessages = [];
    if (existingBooks.some((book) => book.title.toLowerCase() === bookInfo[1].toLowerCase())) {
      duplicateMessages.push(`Ya existe(n) libro(s) con título(s) similar(es): ${existingBooks.map((book) => book.title).join(', ')}`);
    }
    if (existingBooks.some((book) => book.link === bookInfo[2])) {
      duplicateMessages.push('El enlace ya existe en la biblioteca.');
    }
    return m.reply(duplicateMessages.join('\n'));
  }
  try {
    const newBook = new Book({
      title: bookInfo[1],
      link: bookInfo[2],
      author: bookInfo[3],
      genre: bookInfo[4],
    });
    await newBook.save();
    m.reply(`Se agregó el libro: ${newBook.title}`);
  } catch (error) {
    console.error(error);
    m.reply('Error al agregar el libro. Intente nuevamente.');
  }}

function isValidMediafireLink(linkString) {
  const mediafireRegex = /https?:\/\/(www\.)?mediafire\.com\/file\/(.*?)\.pdf\/file/;
  return mediafireRegex.test(linkString);
}

  // Funcion actualizar titulo
async function updateBookTitle(text, conn, m, from) {
  const sanitizedBody = text.replace(/[^\w\s:;\.\-_\/+\p{Latin}]+/g, '');
  const sanitizedBodyLines = sanitizedBody.split('\n');
const b = sanitizedBodyLines.map((line) => line.trim().split(' ').join(' '));
 const bookId = b[1]
  const newTitle = b[2]
if (!mongoose.Types.ObjectId.isValid(bookId)) return m.reply("ID del libro no válida. Debe ser un ObjectId válido.");
  if (!newTitle) return m.reply("Error: Debe proporcionar un nuevo título.");
  try {
    const existingBook = await Book.findById(bookId);
    if (!existingBook) return m.reply("Libro no encontrado con la ID proporcionada.");
    const updatedBook = await Book.findByIdAndUpdate(bookId, { title: newTitle }, { new: true });
    m.reply(`Se actualizó el título del libro a: ${updatedBook.title}`);
  } catch (error) {
    console.error(error);
    m.reply("Error al actualizar el título del libro.")}}

// Funcion actualizar autor
async function updateBookAuthor(text, conn, m, from) {
  const sanitizedBody = text.replace(/[^\w\s:;\.\-_\/+\p{Latin}]+/g, '');
  const sanitizedBodyLines = sanitizedBody.split('\n');
const b = sanitizedBodyLines.map((line) => line.trim().split(' ').join(' '));
 const bookId = b[1]
  const newAuthor = b[2]
  if (!ObjectId.isValid(bookId)) return m.reply("ID del libro no válida. Debe ser un ObjectId válido.");
if (!newAuthor) return m.reply('Error: Debe proporcionar un nuevo autor.');
  try {
    const existingBook = await Book.findById(bookId);
    if (!existingBook) return  m.reply('Libro no encontrado con la ID proporcionada.');
    const updatedBook = await Book.findByIdAndUpdate(bookId, { author: newAuthor }, { new: true });
     m.reply(`Se actualizo el autor del libro a: ${updatedBook.author}`)
    } catch (error) {
    console.error(error);
    m.reply('Error al actualizar el autor del libro.')}}

// Funcion actualizar genero
async function updateBookGenre(text, conn, m, from) {
const sanitizedBody = text.replace(/[^\w\s:;\.\-_\/+\p{Latin}]+/g, '');
  const sanitizedBodyLines = sanitizedBody.split('\n');
const b = sanitizedBodyLines.map((line) => line.trim().split(' ').join(' '));
 const bookId = b[1]
  const newGenre = b[2]
  if (!ObjectId.isValid(bookId)) return m.reply("ID del libro no válida. Debe ser un ObjectId válido.");
if (!newGenre) return m.reply('Error: Debe proporcionar un nuevo género.');
  try {
    const existingBook = await Book.findById(bookId);
    if (!existingBook) return m.reply('Libro no encontrado con la ID proporcionada.');
    const updatedBook = await Book.findByIdAndUpdate(bookId, { genre: newGenre }, { new: true });
    return m.reply(`Se actualizó el género del libro a: ${updatedBook.genre}`);
  } catch (error) {
    console.error(error);
    return m.reply('Error al actualizar el género del libro.')}}

// Funcion actualizar link
async function updateBookLink(text, conn, m, from) {
const sanitizedBody = text.replace(/[^\w\s:;\.\-_\/+\p{Latin}]+/g, '');
  const sanitizedBodyLines = sanitizedBody.split('\n');
const b = sanitizedBodyLines.map((line) => line.trim().split(' ').join(' '));
 const bookId = b[1]
  const newLink = b[2]
  if (!ObjectId.isValid(bookId)) return m.reply("ID del libro no válida. Debe ser un ObjectId válido.");
if (!newLink) return  m.reply('Error: Debe proporcionar un nuevo enlace.');
  if (!isValidMediafireLink(newLink)) return m.reply('Error: El enlace debe ser de Mediafire.');
  try {
    const existingBook = await Book.findById(bookId);
    if (!existingBook) return  m.reply('Libro no encontrado con la ID proporcionada.');
    const updatedBook = await Book.findByIdAndUpdate(bookId, { link: newLink }, { new: true });
    return  m.reply(`Se actualizó el enlace del libro a: ${updatedBook.link}`);
  } catch (error) {
    console.error(error);
    return  m.reply('Error al actualizar el enlace del libro.')}}

// Function to check if link is Mediafire (unchanged)
function isValidMediafireLink(linkString) {
  const mediafireRegex = /https?:\/\/(www\.)?mediafire\.com\/file\/(.*?)\.pdf\/file/;
  return mediafireRegex.test(linkString);
}

// Function eliminar libro
async function deleteBook(conn, m, text) {
  const bookId = text;
  if (!ObjectId.isValid(bookId)) {
    return m.reply("ID del libro no válida. Debe ser un ObjectId válido.");
  }
  try {
    const deletedBook = await Book.findByIdAndDelete(bookId);
if (!deletedBook) {
      return m.reply("Libro no encontrado con la ID proporcionada.");
    }
    return m.reply("Libro eliminado exitosamente.");
  } catch (error) {
    if (error.name === 'MongoError' && error.code === 11000) {
      return m.reply("Error al eliminar el libro: No se puede eliminar porque está asociado a otros datos.");
    } else {
      console.error(error);
      return m.reply("Error al eliminar el libro: " + error.message);
    }}}

module.exports = {
  Book,
  getFormattedBookList,
  searchBooks,
  addBook,
  updateBookTitle,
  updateBookAuthor,
  updateBookGenre,
  updateBookLink,
  deleteBook
};
