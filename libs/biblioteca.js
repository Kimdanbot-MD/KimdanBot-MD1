const fs = require('fs')
const path = require('path')
const mongoose = require('mongoose');
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
}, { collection: 'Kim.Libros', versionKey: false });

const Book = mongoose.model('Kim.Libros', bookSchema);

// Function lista de libros 

async function getFormattedBookList() {
  try {
    const books = await Book.find({});
    const bookTitles = books.map(book => book.title);

    if (bookTitles.length === 0) {
      return 'No hay libros disponibles.';
    }

    const formattedList = `**Lista de libros disponibles:**\n${bookTitles.join('\n')}`;
    return formattedList;
  } catch (error) {
    console.error(error);
    return ''; 
  }
}

// Function buscar libro
async function searchBooks(searchQuery) {
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
      ]
    };

    const books = await Book.find(searchCriteria);

    if (books.length === 0) {
      return 'No se encontraron libros que coincidan con la búsqueda.';
    }

    const formattedResults = books.map(book => {
      return `* **${book.title}** - ${book.link}`;
    });

    return `**Resultados de la búsqueda:**\n${formattedResults.join('\n')}`;
  } catch (error) {
    console.error(error);
    return '';
  }
}

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
