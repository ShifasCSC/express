import { Router } from "express";
// import { addDonor } from "./requestHandler.js";
import * as rh from "./requestHandler.js"

const router=Router();
router.route("/addDonor").post(rh.addDonor)
router.route("/getDonors").get(rh.getDonors)
router.route("/getDonor/:_id").get(rh.getDonor)
router.route("/updateDonor/:_id").put(rh.updateDonor)
router.route("/deleteDonor/:_id").delete(rh.deleteDonor)

export default router;