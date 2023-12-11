import { initDBModels } from "../../db.js";
const { Videogames, Genres } = await initDBModels();

const createGame = async (
  id,
  name,
  image,
  description,
  platforms,
  released,
  rating,
  genre
) => {
  const createVideogames = await Videogames.create({
    id,
    name,
    image,
    description,
    platforms,
    released,
    rating,
  });

  const genreForNewGame = await Genres.findOne({ where: { name: genre } });
  // Si el género existe, añádelo al videojuego
  if (genreForNewGame) {
    await createVideogames.addGenre(genreForNewGame);
  }
  // await createVideogames.addGenre(genreForNewGame);

  //  obtenemos  el videojuego recién creado junto con sus géneros asociados
  const newVideogame = await Videogames.findByPk(createVideogames.id, {
    include: {
      model: Genres,
      attributes: ["name"],
      through: { attributes: [] },
    },
  });

  return newVideogame;
};

export { createGame };
