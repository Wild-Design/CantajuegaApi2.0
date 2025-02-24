const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "Stage",
    {
      //
      id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      minAge: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true,
      },
      maxAge: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      content:{
        type:DataTypes.JSON(DataTypes.ARRAY(DataTypes.JSON)),
        allowNull:true
      }
    },
    {
      timestamps: false,
    }
  );
};
