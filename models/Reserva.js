
const mongoose = require('mongoose');

const reservaSchema = new mongoose.Schema({
  numeroApto: { type: String, required: true },
  nombre: { type: String, required: true },
  idInmueble: { type: String, required: true },
  estado: { type: Boolean, required: true },
  observacion: { type: String }
});

module.exports = mongoose.model('Reserva', reservaSchema);
