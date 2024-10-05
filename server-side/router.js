import { Router } from "express";
import * as rh from "./requestHandler.js";

const router=Router();
router.route("/addmovie").post(rh.addMovie);
router.route("/getmovies").get(rh.getMovies);
router.route("/getmovie/:id").get(rh.getMovie);
router.route("/editmovie/:_id").put(rh.editMovie);
router.route("/deletemovie/:_id").delete(rh.deleteMovie);

export default router;