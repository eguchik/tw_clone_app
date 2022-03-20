var express = require("express");
var router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const SessionID = req.cookies.SessionID;
  if (SessionID) {
    db.Session.findOne({ where: { session_id: SessionID } }).then((session) => {
      db.User.findOne({ where: { id: session.user_id } }).then((user) => {
        db.Tweet.create({
          user: user.user,
          tweet: req.body.tweet,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      });
    });
    res.redirect("/");
  }
});

module.exports = router;
