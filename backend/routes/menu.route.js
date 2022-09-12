import express from "express";
import {
  deleteMenu,
  getAllMenu,
  getOneMenu,
  postMenu,
  updateMenu,
} from "../controllers/menu.controller";

const router = express.Router();

router.route("/").get(getAllMenu).post(postMenu);

router.route("/:id").get(getOneMenu).patch(updateMenu).delete(deleteMenu);

export default router;
