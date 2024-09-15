const express = require("express");
const router = express.Router();
const booksController = require("../controllers/booksController");

// Rutas para libros
router.get("/", booksController.getAllBooks); // Obtener todos los libros
router.get("/:id", booksController.getBookById); // Obtener un libro por ID
router.post("/", booksController.createBook); // Crear un nuevo libro
router.put("/:id", booksController.updateBook); // Actualizar un libro existente
router.delete("/:id", booksController.deleteBook); // Eliminar un libro

module.exports = router;
