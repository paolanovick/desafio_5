// models/bookModel.js

// Simulación de base de datos para libros
let books = [
  {
    id: 1,
    title: "El principito",
    author: "AAntoine de Saint-Exupéry",
    year: 1943,
  },
  { id: 2, title: "Cuentos de la selva", author: "Horacio Quiroga", year: 1918 },
  // Agrega más libros según sea necesario
];

// Obtener todos los libros
const getAllBooks = () => {
  return books;
};

// Obtener un libro por ID
const getBookById = (id) => {
  return books.find((b) => b.id === id);
};

// Crear un nuevo libro
const createBook = (book) => {
  book.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(book);
  return book;
};

// Actualizar un libro existente
const updateBook = (id, updatedBook) => {
  const index = books.findIndex((b) => b.id === id);
  if (index !== -1) {
    books[index] = { ...books[index], ...updatedBook };
    return books[index];
  }
  return null;
};

// Eliminar un libro
const deleteBook = (id) => {
  const index = books.findIndex((b) => b.id === id);
  if (index !== -1) {
    books.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllBooks,
  getBookById,
  createBook,
  updateBook,
  deleteBook,
};
