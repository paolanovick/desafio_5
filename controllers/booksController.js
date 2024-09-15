// controllers/booksController.js

// Simulación de base de datos
let books = [
  {
    id: 1,
    title: "El Principito",
    author: "Antoine de Saint-Exupéry",
    year: 2000,
  },
  { id: 2, title: "Cuentos de la selva", author: "Horacio Quiroga", year: 2005 },
  // Agrega más libros según sea necesario
];

// Obtener todos los libros
exports.getAllBooks = (req, res) => {
  res.status(200).json(books);
};

// Obtener un libro por ID
exports.getBookById = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const book = books.find((b) => b.id === bookId);

  if (book) {
    res.status(200).json(book);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Crear un nuevo libro
exports.createBook = (req, res) => {
  const newBook = req.body;
  newBook.id = books.length ? books[books.length - 1].id + 1 : 1;
  books.push(newBook);
  res.status(201).json(newBook);
};

// Actualizar un libro existente
exports.updateBook = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    books[index] = { ...books[index], ...req.body };
    res.status(200).json(books[index]);
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};

// Eliminar un libro
exports.deleteBook = (req, res) => {
  const bookId = parseInt(req.params.id, 10);
  const index = books.findIndex((b) => b.id === bookId);

  if (index !== -1) {
    books.splice(index, 1);
    res.status(200).json({ message: "Book deleted" });
  } else {
    res.status(404).json({ message: "Book not found" });
  }
};
