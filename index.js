require('dotenv').config();

const express = require('express');
const app = express();

//NotFound Middleware
const notFoundMiddleware = require('./middleware/not-found');

// middleware
app.use(express.json());


//The Home Page Route
app.get('/', (req, res) => {
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
    console.log('ssss');
  }
};

start();

