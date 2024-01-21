const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/sponsor-post", async (req, res) => {
  const { amount, sponsorUID, postId } = req.body;

  const sponsorData = {
    amount,
    sponsorUID,
    postId,
    createdTS: FieldValue.serverTimestamp(),
  };

  await db.collection("sponsors").add(sponsorData);

  return res.status(201).send("Sponsor created successfully");
});

module.exports = router;
