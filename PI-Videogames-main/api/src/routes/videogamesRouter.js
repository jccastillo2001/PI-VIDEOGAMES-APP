import express from "express";
import {
  getAllVideogames,
  getByIdVideogames,
  getDetailVideogames,
  postVideogames,
} from "../handlers/videogamesHandlers.js";

const videogamesRouter = express.Router();

videogamesRouter.get("/", getAllVideogames);
videogamesRouter.get("/:id", getByIdVideogames);
videogamesRouter.get("/detail/:id", getDetailVideogames);
videogamesRouter.post("/", postVideogames);

export default videogamesRouter;
