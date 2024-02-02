import express from "express";
import controller from "../controller/developer.controller.js";
const router = express.Router();
router.post("/developers/posts",controller.createDeveloper);
router.get("/developers",controller.getAllDeveloper);
router.get('/developers/:id',controller.getADeveloper);
router.patch('/developers/update/:id',controller.updateDeveloper);
router.delete('/developers/delete/:id',controller.removeDeveloper);
export default router;