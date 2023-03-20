import { UserSchema } from "../models/UserModel.js";
import mongoose from "mongoose";

const userModel = mongoose.model("User", UserSchema);

//GET ALL USERS
export const getUsers = async () => {
  return await userModel.find();
};
//GET ONE USER
export const getOneUser = async (id) => {
  return await userModel.find({ _id: id });
};

//CREATE | INSERT
export const createUser = async (user) => {
  return await userModel.create(user);
};

//PATCH | UPDATE
export const updateUser = async (user, id) => {
  return await userModel.updateOne({ _id: id });
  const result = getOneUser(id);
};
