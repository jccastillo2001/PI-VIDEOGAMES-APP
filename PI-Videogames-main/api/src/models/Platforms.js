import { DataTypes } from "sequelize";

export default (sequelize) => {
  const Platforms = sequelize.define(
    "Platforms",
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
  return Platforms;
};
