const { DataTypes, UUIDV4 } = require('sequelize');

module.exports = (sequelize) => {

  sequelize.define('Team', {
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
    }    
  },{ timestamps: false });
};

