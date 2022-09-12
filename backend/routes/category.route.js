import express from "express";
import {
  createCategory,
  getAllCategory,
  getOneCategory,
} from "../controllers/category.controller";

const router = express.Router();

router.route("/").get(getAllCategory).post(createCategory);

router
  .route("/:id")
  .get(getOneCategory)
  .patch(() => {})
  .delete(() => {});

export default router;
