const express = require('express');
const router = express.Router();
const { criarNota, listarNotas, detalharAlunoComNotas } = require('../controllers/notaController');

router.post('/', criarNota);
router.get('/', listarNotas);
router.get('/:alunoId', detalharAlunoComNotas);

module.exports = router;

