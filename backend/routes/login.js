const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/", auth, function (req, res) {
  res.send("login request");
});

module.exports = router;
