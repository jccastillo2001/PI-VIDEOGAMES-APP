import { Router } from "express";
import genresRouter from "./genresRouter.js";
import videogamesRouter from "./videogamesRouter.js";
import platformsRouter from "./platformsRouter.js";

const router = Router();

router.use("/genres", genresRouter);
router.use("/videogames", videogamesRouter);
router.use("/platforms", platformsRouter);

export default router;
