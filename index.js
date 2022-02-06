import express from 'express'; // "type" : "module"
import { MongoClient } from "mongodb"; // "type" : "module"
import dotenv from "dotenv"
// import { movieRouter } from './Routes/movies.js';
// import { usersRouter } from './Routes/users.js';
// import bcrypt from "bcrypt";

dotenv.config();
// console.log(process.env)
const app = express();
app.use(express.json());

const PORT = process.env.PORT;

const MONGO_URL = process.env.MONGO_URL;

async function createConnection(){
  const client = new MongoClient(MONGO_URL);
  await client.connect(); //promise
  console.log("Mongo connected");
  return client;
}

export const client = await createConnection();

app.get("/",(request,response)=>{
    response.send("Hello,World🥰😍😘🤩✨🎉🍫🥤");
});

// app.use("/movies", movieRouter);
// app.use("/users", usersRouter);

app.listen(PORT,()=>console.log("The server is started",PORT));