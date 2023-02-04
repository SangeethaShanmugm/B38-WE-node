import { client } from "./index.js";

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
