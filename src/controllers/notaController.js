const Nota = require('../models/nota');
const { buscarAlunoPorId } = require('../services/alunoService');
const { buscarDisciplinaPorId } = require('../services/disciplinaService');

async function detalharAlunoComNotas(req, res) {
  const { alunoId } = req.params;

  try {
    const aluno = await buscarAlunoPorId(alunoId);
    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    const notas = await Nota.findAll({ where: { alunoId } });

    const notasComDisciplina = await Promise.all(
      notas.map(async (nota) => {
        const disciplina = await buscarDisciplinaPorId(nota.disciplinaId);
        return {
          disciplina: disciplina ? disciplina.nome : 'Desconhecida',
          valor: nota.valor
        };
      })
    );

    return res.json({ aluno, notas: notasComDisciplina });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ erro: 'Erro ao buscar dados do aluno' });
  }
}


async function criarNota(req, res) {
  const { alunoId, disciplinaId, valor } = req.body;

  if (!alunoId || !disciplinaId || valor == null) {
    return res.status(400).json({ erro: 'Dados incompletos' });
  }

  try {
    const aluno = await buscarAlunoPorId(alunoId);
    if (!aluno) {
      return res.status(404).json({ erro: 'Aluno não encontrado' });
    }

    const nota = await Nota.create({ alunoId, disciplinaId, valor });
    return res.status(201).json({ ...nota.toJSON(), alunoNome: aluno.nome });
  } catch (error) {
    console.log(error);
    return res.status(500).json(error);
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



module.exports = { criarNota, listarNotas, detalharAlunoComNotas };

