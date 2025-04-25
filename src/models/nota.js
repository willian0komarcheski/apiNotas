const { DataTypes } = require('sequelize');
const sequelize = require('../config/databaseConfig');

const Nota = sequelize.define('Nota', {
  alunoId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  disciplinaId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  valor: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Nota;

