import  DataTypes from "sequelize";

module.exports = (sequelize) => {
  sequelize.define(
    "user",
    {
      firstname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      lastname: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      token: {
        allowNull: false,
        type: DataTypes.STRING,
        unique: true,
      },
      allowextraemails: {
        allowNull: true,
        type: DataTypes.BOOLEAN,
      },
    },
    {
      timestamp: true,
      createdAt: "createdat",
      updatedAt: "updatedat",
    }
  );
};
