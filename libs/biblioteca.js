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
async function searchBooks(searchQuery, conn, m, from) {
  try {
    const trimmedQuery = searchQuery.trim();
    const titleRegex = new RegExp(`^${trimmedQuery}.*`, 'i');
    const authorRegex = new RegExp(`^${trimmedQuery}.*`, 'i');
    const genreRegex = new RegExp(`^${trimmedQuery}.*`, 'i');
    const keywordSearch = { $text: { $search: trimmedQuery } };
    const searchCriteria = {
      $or: [
        { title: titleRegex },
        { author: authorRegex },
        { genre: genreRegex },
        keywordSearch
      ]};
    const books = await Book.find(searchCriteria);
    if (books.length === 0) return m.reply('No se encontraron libros que coincidan con la búsqueda.') 
    const formattedResults = books.map(book => {
      return m.reply(`* *${book.title}* - ${book.link}`)});

    const t = `*Resultados de la búsqueda:*\n${formattedResults.join('\n')}`;
    await conn.sendMessage(m.chat, {text: t}, { quoted: m }) 
  } catch (error) {
    console.error(error);
    return m.reply('')}}

// Function agregar libro
async function addBook(title, link, author, genre) {
  try {
    const newBook = new Book({ title, link, author, genre });
    await newBook.save();
    return newBook;
  } catch (error) {
    console.error(error);
    return null;
  }
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
