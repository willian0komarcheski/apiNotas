const express = require('express');
const router = express.Router();
const { criarNota, listarNotas } = require('../controllers/notaController');

router.post('/', criarNota);
router.get('/', listarNotas);

module.exports = router;

