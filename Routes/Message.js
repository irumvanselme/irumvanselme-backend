import express from "express";
import MessageController from "../Controllers/MessageController.js";

const router = express.Router();

router.get("/", MessageController.get_all);
router.get("/:id", MessageController.get_one);
router.post("/", MessageController.create);
router.put("/:id", MessageController.edit);
router.delete("/:id", MessageController.delete);

export default router;
