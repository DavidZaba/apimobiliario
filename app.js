
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Middlewares
app.use(cors());
app.use(bodyParser.json());
app.use(express.static('public'));

// // Conexión a MongoDB Atlas
// mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true, useUnifiedTopology: true })
//   .then(() => console.log('Conectado a MongoDB Atlas'))
//   .catch(err => console.error('Error al conectar a MongoDB Atlas:', err));

// Rutas
const reservasRoutes = require('./routes/reservas');
app.use('/api/reservas', reservasRoutes);

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
