import express from "express";
import {
  createUser,
  getOneUser,
  getUsers,
  updateUser,
} from "../controllers/user-controller.js";

const router = express.Router();

//GET ALL USERS
router.get("/", async (req, res) => {
  res.json(await getUsers());
});

//GET ONE USER BY ID
router.get("/:id", async (req, res) => {
  const { id } = req.params;
  res.json(await getOneUser(id));
});

//CREATE AN USER
router.post("/", async (req, res) => {
  const user = req.body;
  res.json(await createUser(user));
});

//UPDATE AN USER
router.patch("/:id", async (req, res) => {
  const { id } = req.params;
  const { name, email } = req.body;
  const result = await updateUser();
});

export default router;
