// require("dotenv").config();
import dotenv from "dotenv";
dotenv.config();
const { URL_GAME, DB_USER, DB_PASSWORD, API_KEY, DB_HOST, VIDEO_GAMES } =
  process.env;

export { URL_GAME, DB_USER, DB_PASSWORD, API_KEY, DB_HOST, VIDEO_GAMES };
