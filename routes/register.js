const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.get("/", function (req, res, next) {
  res.render("register");
});

router.post("/", (req, res) => {
  const userName = req.body.name;
  const password = req.body.password;
  const hashedPassword = bcrypt.hashSync(password, 10);

  db.User.create({
    user: userName,
    password: hashedPassword,
    createdAt: new Date(),
    updatedAt: new Date(),
  }).then((user) => {
    res.redirect("/");
  });
});

module.exports = router;
