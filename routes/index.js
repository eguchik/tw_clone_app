var express = require("express");
var router = express.Router();
const db = require("../models");

router.get("/", function (req, res) {
  const SessionID = req.cookies.SessionID;
  if (SessionID) {
    db.Session.findOne({ where: { session_id: SessionID } }).then((session) => {
      db.User.findOne({ where: { id: session.user_id } }).then((user) => {
        res.render("index", { user: user });
      });
    });
  } else {
    res.render("index", { user: {} });
  }
});

module.exports = router;
