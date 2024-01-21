const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/sponsor-post", async (req, res) => {
  const { amount, sponsorUID, posterUID } = req.body;

  const sponsorData = {
    amount,
    sponsorUID,
    posterUID,
    createdTS: FieldValue.serverTimestamp(),
  };

  const sponsorRef = await db.collection("sponsors").add(sponsorData);
  const sponsorId = sponsorRef.id;

  await db
    .collection("posts")
    .doc(posterUID)
    .update({ sponsors: FieldValue.arrayUnion(sponsorId) });

  return res.status(201).send("Sponsor created successfully");
});

module.exports = router;
