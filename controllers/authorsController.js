const authorModel = require("../models/authorModel");

// Obtener todos los autores
exports.getAllAuthors = (req, res) => {
  res.status(200).json(authorModel.getAllAuthors());
};

// Obtener un autor por ID
exports.getAuthorById = (req, res) => {
  const authorId = parseInt(req.params.id, 10);
  const author = authorModel.getAuthorById(authorId);

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};

// Crear un nuevo autor
exports.createAuthor = (req, res) => {
  const newAuthor = req.body;
  const createdAuthor = authorModel.createAuthor(newAuthor);
  res.status(201).json(createdAuthor);
};

// Actualizar un autor existente
exports.updateAuthor = (req, res) => {
  const authorId = parseInt(req.params.id, 10);
  const updatedAuthor = authorModel.updateAuthor(authorId, req.body);

  if (updatedAuthor) {
    res.status(200).json(updatedAuthor);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};

// Eliminar un autor
exports.deleteAuthor = (req, res) => {
  const authorId = parseInt(req.params.id, 10);
  const deleted = authorModel.deleteAuthor(authorId);

  if (deleted) {
    res.status(200).json({ message: "Author deleted" });
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};
