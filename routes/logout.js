var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.clearCookie("SessionID");
  res.redirect("/");
});

module.exports = router;
