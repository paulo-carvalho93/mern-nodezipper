import asyncHandler from "express-async-handler";
import User from "../models/userModel.js";
import { generateToken } from "../utils/generateToken.js";

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
      token: generateToken(user._id),
    });
  } else {
    resp.status(400);
    throw new Error("Oops! Something went wrong!");
  }
});

export const authUser = asyncHandler(async (req, resp) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (user && (await user.matchPassword(password))) {
    resp.json({
       _id: user._id,
      name: user.name,
      email: user.email,
      picture: user.picture,
      isAdmin: user.isAdmin,
      token: generateToken(user._id),
    });
  } else {
    resp.status(400);
    throw new Error("Invalid Email or Password!");
  }
});