import express from "express";
import { edit, remove, logout, see } from "../controllers/userController";

const userRouter = express.Router();

const handleEdit = (req, res) => res.send("edit user");
const handleDelete = (req, res) => res.send("delete user");

userRouter.get("/logout", logout);
userRouter.get("/edit", edit);
userRouter.get("/remove", remove);
userRouter.get("/:id", see);

export default userRouter;
