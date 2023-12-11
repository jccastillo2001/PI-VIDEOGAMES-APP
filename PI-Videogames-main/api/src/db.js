import { Sequelize } from "sequelize";
import { DB_USER, DB_PASSWORD, DB_HOST, VIDEO_GAMES } from "./config/envs.js";

import { readdirSync } from "fs";
import { basename, join } from "path";
import { fileURLToPath } from "url";

const __dirname = fileURLToPath(new URL(".", import.meta.url));

export const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${VIDEO_GAMES}`,
  {
    logging: false,
    native: false,
  }
);

const modelDefiners = [];

readdirSync(join(__dirname, "models"))
  .filter((file) => file !== basename && file.slice(-3) === ".js")
  .forEach((file) => {
    modelDefiners.push(import(new URL(`./models/${file}`, import.meta.url)));
  });

export const initDBModels = async () => {
  // Carga modelos
  for (const modelDefiner of modelDefiners) {
    const modelModule = await modelDefiner;
    const model = modelModule.default || modelModule;
    model(sequelize);
  }

  // Capitaliza nombres
  let entries = Object.entries(sequelize.models);
  let capsEntries = entries.map((entry) => [
    entry[0][0].toUpperCase() + entry[0].slice(1),
    entry[1],
  ]);

  sequelize.models = Object.fromEntries(capsEntries);

  const { Videogames, Genres, Platforms } = sequelize.models;

  Videogames.belongsToMany(Genres, { through: "videoGames_genres" });
  Genres.belongsToMany(Videogames, { through: "videoGames_genres" });

  Videogames.belongsToMany(Platforms, { through: "videoGames_platforms" });
  Platforms.belongsToMany(Videogames, { through: "videoGames_platforms" });

  return sequelize.models;
};

export default sequelize;

// import { initDBModels } from './ruta/a/tu/archivo/principal.js';
// const { Videogames, Genres } = await initDBModels();
