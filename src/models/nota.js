const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Nota = sequelize.define('Nota', {
  alunoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disciplina: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Nota;

