// import express from "express";
// import cors from "cors";
// import { Login } from "./routes/Login.js";
require("dotenv").config();

const express = require("express");
const cors = require("cors");

const router = require("./routes/auth-routes");

const app = express();
const PORT = process.env.port || 5000;

app.use(cors("*"));
app.use(express.json());

app.use("/", router);

app.listen(PORT, () => {
  try {
    console.log(`connection established successfully in ${PORT} `);
  } catch (error) {
    console.log("stuck in err");
  }
});
