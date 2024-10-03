import { Router } from "express";
import * as rh from "./requestHandler.js"

const router=Router();
router.route("/addEmp").post(rh.addEmp)
router.route("/getEmps").get(rh.getEmps)
router.route("/getEmployee/:_id").get(rh.getEmployee)
router.route("/updateEmp/:_id").put(rh.updateEmp)
router.route("/deleteEmp/:_id").delete(rh.deleteEmp)
//register
router.route("/signup").post(rh.signUp)

export default router;