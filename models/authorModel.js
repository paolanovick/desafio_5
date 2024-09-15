// models/authorModel.js

// Simulación de base de datos para autores
let authors = [
  { id: 1, name: "Antoine de Saint-Exupéry", birthYear: 1900 },
  { id: 2, name: "AHoracio Quiroga", birthYear: 1878 },
  // Agrega más autores según sea necesario
];

// Obtener todos los autores
const getAllAuthors = () => {
  return authors;
};

// Obtener un autor por ID
const getAuthorById = (id) => {
  return authors.find((a) => a.id === id);
};

// Crear un nuevo autor
const createAuthor = (author) => {
  author.id = authors.length ? authors[authors.length - 1].id + 1 : 1;
  authors.push(author);
  return author;
};

// Actualizar un autor existente
const updateAuthor = (id, updatedAuthor) => {
  const index = authors.findIndex((a) => a.id === id);
  if (index !== -1) {
    authors[index] = { ...authors[index], ...updatedAuthor };
    return authors[index];
  }
  return null;
};

// Eliminar un autor
const deleteAuthor = (id) => {
  const index = authors.findIndex((a) => a.id === id);
  if (index !== -1) {
    authors.splice(index, 1);
    return true;
  }
  return false;
};

module.exports = {
  getAllAuthors,
  getAuthorById,
  createAuthor,
  updateAuthor,
  deleteAuthor,
};
