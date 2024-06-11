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
async function searchBooks(text, conn, m, from) {
  if (!text) return m.reply('que libro buscas? ')
    try {
    const searchQuery = text
    const trimmedQuery = searchQuery.trim();
    const titleRegex = new RegExp(`^${trimmedQuery}.*`, 'i');
    const authorRegex = new RegExp(`^${trimmedQuery}.*`, 'i');
    const genreRegex = new RegExp(`^${trimmedQuery}.*`, 'i');
    const searchCriteria = {
      $or: [
        { title: titleRegex },
        { author: authorRegex },
        { genre: genreRegex }
      ]};
    const books = await Book.find(searchCriteria);
    if (books.length === 0) return m.reply('No se encontraron libros que coincidan con la búsqueda.') 
    const formattedResults = books.map(book => `* **${book.title}** - ${book.link}`);

    const t = `*Resultados de la búsqueda:*\n${formattedResults.join('\n')}`;
    await conn.sendMessage(m.chat, {text: t}, { quoted: m }) 
  } catch (error) {
    console.error(error);
    return m.reply('')}}

// Function agregar libro
async function addBook(body, text, conn, m, from) {
  const {title, link, author, genre} = text
  const existingBook = await Book.findOne({ $or: [{ title }, { link }] });
var gh = body.slice(11);
var title = gh.split("-")[1];
var link = gh.split("-")[2];
var author = gh.split("-")[3];
var genre = gh.split("-")[4]; 
if (title && link && author && genre) {
  if (existingBook) return m.reply ('este libro ya existe') 

  const newBook = new Book({ title, link, author, genre });
    await newBook.save();
    conn.sendMessage(m.chat, {text: `se agregó el libro ${newBook}`}, { quoted: m }) 
    } else {
    return m.reply('error debes completar todos los campos title, link, author, genre')
    } catch (error){
      console.error(error);
      return m.reply('')}}

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
