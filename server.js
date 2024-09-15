// server.js
const express = require("express");
const app = express();
const PORT = 3000;

// Importar rutas
const booksRoutes = require("./routes/booksRoutes");
const authorsRoutes = require("./routes/authorsRoutes");

// Middleware
app.use(express.json());
// Definir una ruta para la raíz
app.get('/', (req, res) => {
  res.send('Bienvenidos a la API de Books y Authors!');
});


// Usar rutas
app.use("/books", booksRoutes);
app.use("/authors", authorsRoutes);

// Iniciar servidor
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
