const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/create-comment", auth, async (req, res) => {
  try {
    const { uid, postId, parentComment, text } = req.body;

    const commentData = {
      uid,
      postId,
      parentComment,
      text,
      createdTS: FieldValue.serverTimestamp(),
    };
    await db.collection("comments").add(commentData);

    return res.status(201).send("Comment created successfully");
  } catch (error) {
    console.error("Error creating comment", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
