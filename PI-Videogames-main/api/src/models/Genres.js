import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Genres = sequelize.define(
    "Genres",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    { timestamps: false }
  );
  return Genres;
};
