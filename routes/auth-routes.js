const express = require("express");
const authUser = require("../authendicate/loginAuth");
const db = require("../db/models");
const authServices = require("../services/auth-services.js");

const router = express.Router();

let authService = new authServices();

router.post("/api/sign-in", authService.LoginUserService);

router.post("/api/sign-up", authService.SignUpUser);

router.get("/api/lookup-user", authUser, authService.LookupService);

module.exports = router;
