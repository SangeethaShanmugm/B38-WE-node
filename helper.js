import { client } from "./index.js";
import bcrypt from "bcrypt";
export async function AddBook(newBook) {
  return await client.db("b38we").collection("books").insertMany(newBook);
}
export async function deleteBookByID(id) {
  return await client.db("b38we").collection("books").deleteOne({ id: id });
}
export async function getBookByID(id) {
  return await client.db("b38we").collection("books").findOne({ id: id });
}
export async function getBooks(request) {
  return await client
    .db("b38we")
    .collection("books")
    .find(request.query)
    .toArray();
}

export async function updateBookByID(id, updateBook) {
  return await client
    .db("b38we")
    .collection("books")
    .updateOne({ id: id }, { $set: updateBook });
}

export async function genPassword(password) {
  const salt = await bcrypt.genSalt(10); // bcrypt.genSalt(no. of rounds)
  console.log(salt);
  const hashedPassword = await bcrypt.hash(password, salt);
  console.log(hashedPassword);
  return hashedPassword;
}

export async function createUser(username, hashedPassword) {
  return await client
    .db("b38we")
    .collection("users")
    .insertOne({ username: username, password: hashedPassword });
}

export async function getUserByName(username) {
  return await client
    .db("b38we")
    .collection("users")
    .findOne({ username: username });
}
