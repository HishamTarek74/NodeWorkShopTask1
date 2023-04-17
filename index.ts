//require('dotenv').config(); => The Old Way 
//  import the entire module and all of its exports like this
import * as dotenv from "dotenv";
dotenv.config();

//const express = require('express'); => The Old way
import express from "express";
const app = express();

//NotFound Middleware
const notFoundMiddleware = require('./middleware/not-found');

// middleware
app.use(express.json());


//The Home Page Route
app.get('/', (req: any, res: { send: (arg0: string) => void; }) => {
  res.send('<h1>WorkShop Task</h1><a href="#">The Home Page Route</a>');
});

app.use(notFoundMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    // connectDB
   // await connectDB(process.env.MONGO_URI);
    app.listen(port, () => console.log(`Server is listening port ${port}...`));
  } catch (error) {
    console.log(error);
  }
};

start();

