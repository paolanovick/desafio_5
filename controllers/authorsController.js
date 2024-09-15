// controllers/authorsController.js

// Simulación de base de datos
let authors = [
  { id: 1, name: "Antoine de Saint-Exupéry", birthYear: 1900 },
  { id: 2, name: "Horacio Quiroga", birthYear: 1878 },
  // Agrega más autores según sea necesario
];

// Obtener todos los autores
exports.getAllAuthors = (req, res) => {
  res.status(200).json(authors);
};

// Obtener un autor por ID
exports.getAuthorById = (req, res) => {
  const authorId = parseInt(req.params.id, 10);
  const author = authors.find((a) => a.id === authorId);

  if (author) {
    res.status(200).json(author);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};

// Crear un nuevo autor
exports.createAuthor = (req, res) => {
  const newAuthor = req.body;
  newAuthor.id = authors.length ? authors[authors.length - 1].id + 1 : 1;
  authors.push(newAuthor);
  res.status(201).json(newAuthor);
};

// Actualizar un autor existente
exports.updateAuthor = (req, res) => {
  const authorId = parseInt(req.params.id, 10);
  const index = authors.findIndex((a) => a.id === authorId);

  if (index !== -1) {
    authors[index] = { ...authors[index], ...req.body };
    res.status(200).json(authors[index]);
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};

// Eliminar un autor
exports.deleteAuthor = (req, res) => {
  const authorId = parseInt(req.params.id, 10);
  const index = authors.findIndex((a) => a.id === authorId);

  if (index !== -1) {
    authors.splice(index, 1);
    res.status(200).json({ message: "Author deleted" });
  } else {
    res.status(404).json({ message: "Author not found" });
  }
};
