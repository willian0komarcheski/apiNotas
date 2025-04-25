const { apiDisciplinas } = require('../config/apiDisciplinas');

async function buscarDisciplinaPorId(id) {
  try {
    const response = await apiDisciplinas.get(`/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    if (err.response && err.response.status === 404) {
      return null;
    }
    throw new Error('Erro ao conectar à API de Alunos');
  }
}

module.exports = { buscarDisciplinaPorId };

