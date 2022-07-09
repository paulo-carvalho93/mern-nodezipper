import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";

export const registerUser = asyncHandler(async (req, resp) => {
  const { name, email, password, picture } = req.body;
  
  const userExists = await User.findOne({ email });

  if (userExists) {
    resp.status(400);
    throw new Error('User already exists!');
  }

  const user = await User.create({
    name,
    email,
    password,
    picture,
  });

  if (user) {
    resp.status(201).json({
      _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      isAdmin: user.isAdmin,
    });
  } else {
    resp.status(400);
    throw new Error("Oops! Something went wrong!");
  }
});