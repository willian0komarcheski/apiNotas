const Nota = require('../models/nota');
const { buscarAlunoPorId } = require('../services/alunoService');

async function criarNota(req, res) {
  const { alunoId, disciplina, valor } = req.body;

  if (!alunoId || !disciplina || valor == null) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  try {
    const aluno = await buscarAlunoPorId(alunoId);
    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    const nota = await Nota.create({ alunoId, disciplina, valor });
    return res.status(201).json({ ...nota.toJSON(), alunoNome: aluno.nome });
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao criar nota' });
  }
}

async function listarNotas(req, res) {
  try {
    const notas = await Nota.findAll();
    return res.json(notas);
  } catch (error) {
    return res.status(500).json({ erro: 'Erro ao listar notas' });
  }
}

module.exports = { criarNota, listarNotas };

