import { Router } from "express";
import { getPlatforms } from "../handlers/platformsHandlers.js";

const platformsRouter = Router();

// Getting routes
platformsRouter.get("/", getPlatforms);

export default platformsRouter;
