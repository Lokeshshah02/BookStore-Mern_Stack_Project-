import express, { request, response } from "express";
import { PORT, mongoDBURL } from "./config.js";
import mongoose from "mongoose";
import BooksRoute from './Routes/BooksRoutes.js'
import cors from 'cors'

// const cors = require('cors');
const app = express();

//Middleware for parsing request body
app.use(express.json());


//middleware for handling CORS POLICY
//Option 1 : Allow All Origin with Default of cors(*)
app.use(cors());
//Option 2 : Allow Custom Origins
// app.use(
//   cors({
//     origin: 'hhtp://localhost:3000',
//     methods: ['GET','PUT','POST','DELETE'],
//     allowedHeader: ['content-Type'],
//   })
// )


app.get("/", (request, response) => {
  console.log(request);
  return response.status(234).send("welcome");
});

app.use('/books', BooksRoute);


mongoose
  .connect(mongoDBURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`app is listenning to port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
