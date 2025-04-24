const { apiAlunos } = require('../config/apiAlunos');

async function buscarAlunoPorId(id) {
  try {
    const response = await apiAlunos.get(`/${id}`);
    return response.data;
  } catch (err) {
    if (err.response && err.response.status === 404) {
      return null;
    }
    throw new Error('Erro ao conectar à API de Alunos');
  }
}

module.exports = { buscarAlunoPorId };

