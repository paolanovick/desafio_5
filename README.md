# Desafío 5

## Descripción

Este proyecto sigue el patrón de diseño MVC para gestionar una colección de libros y autores usando Node.js y Express.

## Estructura del Proyecto

- `controllers/`: Controladores para gestionar la lógica de las rutas.
- `models/`: Modelos para representar los datos.
- `routes/`: Definición de rutas.
- `services/`: Lógica de negocio y servicios.

## Configuración del Proyecto

1. **Clonar el repositorio:**

   ```sh
   git clone <https://github.com/paolanovick/desafio_5.git>
   desafio_5/
│
├── controllers/
│   ├── booksController.js
│   └── authorsController.js
│
├── models/
│   ├── book.js
│   └── author.js
│
├── routes/
│   ├── booksRoutes.js
│   └── authorsRoutes.js
│
├── services/
│   ├── bookService.js
│   └── authorService.js
│
├── server.js
└── README.md

