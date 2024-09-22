
const Reserva = require('../models/Reserva');

// Obtener todas las reservas
exports.getReservas = async (req, res) => {
  try {
    const reservas = await Reserva.find();
    res.json(reservas);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Crear una nueva reserva
exports.createReserva = async (req, res) => {
  const reserva = new Reserva({
    numeroApto: req.body.numeroApto,
    nombre: req.body.nombre,
    idInmueble: req.body.idInmueble,
    estado: req.body.estado,
    observacion: req.body.observacion
  });
  try {
    const nuevaReserva = await reserva.save();
    res.status(201).json(nuevaReserva);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Editar una reserva
exports.updateReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) {
      return res.status(404).json({ message: 'Reserva no encontrada' });
    }
    reserva.numeroApto = req.body.numeroApto || reserva.numeroApto;
    reserva.nombre = req.body.nombre || reserva.nombre;
    reserva.idInmueble = req.body.idInmueble || reserva.idInmueble;
    reserva.estado = req.body.estado ?? reserva.estado;
    reserva.observacion = req.body.observacion || reserva.observacion;
    await reserva.save();
    res.json(reserva);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Eliminar una reserva
exports.deleteReserva = async (req, res) => {
  try {
    const reserva = await Reserva.findById(req.params.id);
    if (!reserva) return res.status(404).json({ message: 'Reserva no encontrada' });
    await reserva.remove();
    res.json({ message: 'Reserva eliminada' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
