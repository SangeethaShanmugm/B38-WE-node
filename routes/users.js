import express from "express";
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

export const usersRouter = router;

//validate if username already exists
//validate if password matches
