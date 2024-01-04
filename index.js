const express = require("express");
const mongoose = require("mongoose");
const swaggerDocs = require("./docs/swagger.js");
const useRoutes = require("./src/routes/index.js");

const port = 3000;

const app = express();

app.use(express.json());
useRoutes(app);

mongoose
  .connect("mongodb://localhost:27017/local")
  .then((x) => {
    console.log("connected to database");
    try {
      app.listen(port, () => {
        console.log(`Server connected to http://localhost:${port}`);
      });
      swaggerDocs(app, port);
    } catch (error) {
      console.log("Cannot connect to the server");
    }
  })
  .catch((error) => {
    console.log("Invalid database connection...!", error);
  });
