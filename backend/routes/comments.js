const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/create-comment", auth, async (req, res) => {
  try {
    const { uid, pid, parentComment, text } = req.body;

    const commentData = {
      uid,
      parentComment,
      text,
      createdTS: FieldValue.serverTimestamp(),
    };
    const commentRef = await db.collection("comments").add(commentData);
    const commentId = commentRef.id;

    await db
      .collection("posts")
      .doc(pid)
      .update({ comments: FieldValue.arrayUnion(commentId) });

    return res.status(201).send("Comment created successfully");
  } catch (error) {
    console.error("Error creating comment", error);
    res.status(500).send(error.message);
  }
});

module.exports = router;
