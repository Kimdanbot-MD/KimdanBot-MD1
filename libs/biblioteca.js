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
  const trimmedQuery = text.toLowerCase().trim();
  let searchType;
  if (shouldUseSearchTypeDetection()) {
    searchType = detectSearchType(trimmedQuery);
  }
  const searchCriteria = buildSearchCriteria(trimmedQuery, searchType);
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
  const formattedResults = formatSearchResults(books);
  await sendSearchResults(conn, m, formattedResults);
}
function detectSearchType(query) {
  // ... (Search type detection logic using prefixes)
}
function buildSearchCriteria(query, searchType) {
  const criteria = { $regex: `^${query}.*`, $options: 'i' };
  if (searchType) {
    criteria[searchType] = criteria;
  }
  return criteria;
}
async function fetchExternalBooks(query) {
  // ... (Logic to fetch books from an external API)
  // Example:
  // const response = await axios.get('https://external-api.com/books?q=' + query);
  // const externalBooks = response.data.books;
  // return externalBooks;
  return []; // Placeholder for external API integration
}
function shouldUseExternalAPI() {
  // Implement logic to determine if external API integration should be used
  return false; // Default to false for now
}
function deduplicateBooks(books) {
  // ... (Logic to deduplicate books based on a unique identifier)
  // Example:
  // const uniqueBooks = new Set(books.map(book => book.id));
  // return Array.from(uniqueBooks);
  return books; // Placeholder for deduplication logic
}
function shouldDeduplicateResults() {
  // Implement logic to determine if deduplication should be performed
  return false; // Default to false for now
}
function sortBooks(books) {
  // ... (Logic to sort books based on a specific criteria)
  // Example:
  // books.sort((a, b) => a.title.localeCompare(b.title));
  // return books;
  return books; // Placeholder for sorting logic
}
function shouldSortResults() {
  // Implement logic to determine if sorting should be performed
  return false; // Default to false for now
}
function formatSearchResults(books) {
  return books.map((book) => {
    let resultText = `* **${book.title}** - ${book.link}`;
    if (book.author) {
      resultText += ` (por ${book.author})`;
    }
    if (book.genre) {
      resultText += ` (género: ${book.genre})`;
    }
    return resultText;
  }).join('\n');
}
async function sendSearchResults(conn, m, formattedResults) {
  await conn.sendMessage(m.chat, { text: formattedResults }, { quoted: m });
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
