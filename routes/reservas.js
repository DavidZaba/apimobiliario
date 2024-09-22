
const express = require('express');
const router = express.Router();
const reservaController = require('../controllers/reservaController');

// Obtener todas las reservas
router.get('/', reservaController.getReservas);

// Crear una nueva reserva
router.post('/', reservaController.createReserva);

// Editar una reserva
router.put('/:id', reservaController.updateReserva);

// Eliminar una reserva
router.delete('/:id', reservaController.deleteReserva);

module.exports = router;
