const { apiAlunos } = require('../config/apiAlunos');
const axios = require('axios');


async function buscarAlunoPorId(id) {
  try {
    const response = await apiAlunos.get(`/${id}`);
    return response.data;
  } catch (err) {
    console.log(err);
    if (err.response && err.response.status === 404) {
      return err;
    }
    throw new Error('Erro ao conectar à API de Alunos');
  }
}

module.exports = { buscarAlunoPorId };

