import express from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { genPassword, createUser, getUserByName } from "../helper.js";
const router = express.Router();

router.post("/signup", async (request, response) => {
  const { username, password } = request.body;
  //   console.log(username, password);
  const isUserExist = await getUserByName(username);
  //   console.log(isUserExist);
  //username already exists
  if (isUserExist) {
    response.status(400).send({ message: "Username already taken" });
    return;
  }
  if (
    !/^(?=.*?[0-9])(?=.*?[a-z])(?=.*?[A-Z])(?=.*?[#!@%&]).{8,}$/g.test(password)
  ) {
    response.status(400).send({ message: "Password pattern does not match" });
    return;
  }

  const hashedPassword = await genPassword(password);
  const result = await createUser(username, hashedPassword);
  response.send(result);
});

router.post("/signin", async (request, response) => {
  const { username, password } = request.body;
  //   console.log(username, password);
  const userFromDB = await getUserByName(username);
  console.log(userFromDB);
  //username already exists
  if (!userFromDB) {
    response.status(400).send({ message: "Invalid Credentials" });
    return;
  }
  const storedDbPassword = userFromDB.password;

  const isPasswordMatch = await bcrypt.compare(password, storedDbPassword);
  if (!isPasswordMatch) {
    response.status(400).send({ message: "Invalid Credentials" });
    return;
  }

  //jwt token
  const token = jwt.sign({ id: userFromDB._id }, process.env.SECRET_KEY);
  response.send({ message: "Successfull Login", token: token });
});

export const usersRouter = router;

//validate if username already exists
//validate if password matches
