import { mapDetailsVideogames } from "../../helpers/mapDetailsVideogames.js";
import axios from "axios";
import { initDBModels } from "../../db.js";
const { Videogames, Genres } = await initDBModels();
import { URL_GAME, API_KEY } from "../../config/envs.js";

const detailVideoGameId = async (id, source) => {
  const apiUrlVideogames =
    source === "api"
      ? (await axios.get(`${URL_GAME}/games/${id}?key=${API_KEY}`)).data
      : await Videogames.findByPk(id);

  const gameFiltered = mapDetailsVideogames(apiUrlVideogames);
  return gameFiltered;
};

export { detailVideoGameId };
