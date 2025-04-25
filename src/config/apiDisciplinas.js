const axios = require('axios');

const apiDisciplinas = axios.create({
  baseURL: process.env.DISCIPLINAS_API_URL,
  timeout: 5000,
});

module.exports = { apiDisciplinas };

