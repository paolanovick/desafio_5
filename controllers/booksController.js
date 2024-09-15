const bookModel = require("../models/bookModel");

// Obtener todos los libros
exports.getAllBooks = (req, res) => {
  res.status(200).json(bookModel.getAllBooks());
};

// Obtener un libro por ID
exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = bookModel.getBookById(bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Crear un nuevo libro
exports.createBook = (req, res) => {
  const newBook = req.body;
  const createdBook = bookModel.createBook(newBook);
  res.status(201).json(createdBook);
};

// Actualizar un libro existente
exports.updateBook = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const updatedBook = bookModel.updateBook(bookId, req.body);

  if (updatedBook) {
    res.status(200).json(updatedBook);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Eliminar un libro
exports.deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const deleted = bookModel.deleteBook(bookId);

  if (deleted) {
    res.status(200).json({ message: "Book deleted" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};
