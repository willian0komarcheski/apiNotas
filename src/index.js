require('dotenv').config();
const express = require('express');
const sequelize = require('./config/databaseConfig');
const notasRoutes = require('./routes/notasRoutes');

const app = express();
app.use(express.json());


app.use('/notas', notasRoutes);

const PORT = process.env.PORT || 4001;

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
});

