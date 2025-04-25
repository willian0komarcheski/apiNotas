const axios = require('axios');

const apiAlunos = axios.create({
  baseURL: process.env.ALUNOS_API_URL,
  timeout: 5000,
});

module.exports = { apiAlunos };

