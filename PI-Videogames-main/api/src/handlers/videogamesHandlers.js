import { createGame } from "../controllers/Videogames/newVideogames.js";
import { catchedAsync } from "../utils/catchedAsync.js";
import { detailVideoGameId } from "../controllers/Videogames/detailVideogames.js";

export const getAllVideogames = (req, res) => {
  res.send(`todos los games`);
};
export const getByIdVideogames = (req, res) => {
  res.send(`todos id`);
};
export const getDetailVideogames = catchedAsync(async (req, res) => {
  const { id } = req.params;
  const source = isNaN(id) ? "bdd" : "api";
  const detailApi = await detailVideoGameId(id, source);
  res.status(200).json(detailApi);
});

export const postVideogames = async (req, res) => {
  try {
    const { id, name, image, description, platforms, released, rating, genre } =
      req.body;
    const newGame = await createGame(
      id,
      name,
      image,
      description,
      platforms,
      released,
      rating,
      genre
    );
    res.status(200).json(newGame);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
