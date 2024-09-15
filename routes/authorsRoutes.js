const express = require("express");
const router = express.Router();
const authorsController = require("../controllers/authorsController");

// Rutas para autores
router.get("/", authorsController.getAllAuthors); // Obtener todos los autores
router.get("/:id", authorsController.getAuthorById); // Obtener un autor por ID
router.post("/", authorsController.createAuthor); // Crear un nuevo autor
router.put("/:id", authorsController.updateAuthor); // Actualizar un autor existente
router.delete("/:id", authorsController.deleteAuthor); // Eliminar un autor

module.exports = router;
