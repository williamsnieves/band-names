import { Router } from "express";
import { getBandNames } from "./handlers/band-names";

const router = Router();

router.get("/band-names", getBandNames);

export default router;
