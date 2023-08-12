// import express from "express";
// import cors from "cors";
// import { Login } from "./routes/Login.js";
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const router = require("./routes/auth-routes");
const rootInstance = require("./db/connection");

const app = express();
const PORT = process.env.port || 4336;

app.use(cors("*"));
app.use(express.json());

app.use("/", router);
try {
  rootInstance.authenticate();
  console.log("DATABASE Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.listen(PORT, () => {
  try {
    console.log(`connection established successfully in ${PORT} `);
  } catch (error) {
    console.log("stuck in err");
  }
});
