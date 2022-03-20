const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", async function (req, res) {
  const tweets = await db.Tweet.findAll();
  res.json(tweets);
});
module.exports = router;
