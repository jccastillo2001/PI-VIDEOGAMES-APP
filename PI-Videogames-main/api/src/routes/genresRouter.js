import express from "express";
import { getAllGenres } from "../handlers/genresHandlers.js";

const genresRouter = express.Router();

genresRouter.get("/", getAllGenres);

export default genresRouter;
