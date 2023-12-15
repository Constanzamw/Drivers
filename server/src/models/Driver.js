const { DataTypes, UUIDV4 } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Driver', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    id:{
      primaryKey: true,
      type: DataTypes.UUID,
      defaultValue: UUIDV4,
      allowNull: false,
      unique:true, 
    },
    surname:{
      type: DataTypes.STRING,
      allowNull: true,
    },
    description:{
      type: DataTypes.STRING,
      allowNull:false
    },
    image:{
      type: DataTypes.TEXT,
      allowNull:true
    },
    nationality:{
      type: DataTypes.STRING,
      allowNull:false
    },
    dateOfBirth:{
      type: DataTypes.STRING,
      allowNull:true
    },
  },{ timestamps: false });
};


