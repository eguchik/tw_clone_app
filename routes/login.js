const express = require("express");
const router = express.Router();
const db = require("../models");
const bcrypt = require("bcrypt");

router.get("/", function (req, res, next) {
  res.render("login");
});

router.post("/", (req, res) => {
  const userName = req.body.name;
  const password = req.body.password;
  const sessionId = Math.random().toString(32).substring(2);

  db.User.findOne({ where: { user: userName } }).then((user) => {
    if (bcrypt.compareSync(password, user.password)) {
      db.Session.create({
        user_id: user.id,
        session_id: sessionId,
        createdAt: new Date(),
        updatedAt: new Date(),
      }).then((session) => {
        res
          .cookie("SessionID", session.session_id, {
            maxAge: 3600000,
            secure: false,
            httpOnly: false,
          })
          .render("index", { user: user });
      });
    }
  });
});

module.exports = router;
