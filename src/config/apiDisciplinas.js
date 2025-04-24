const axios = require('axios');

const apiDisciplinas = axios.create({
  baseURL: process.env.DISCIPLINA_API_BASE_URL,
  timeout: 5000,
});

module.exports = { apiDisciplinas };

