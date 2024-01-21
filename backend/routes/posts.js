const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore, Timestamp, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/create-post/:uid", auth, async (req, res) => {
  try {
    const uid = req.params.uid;
    const { firstName, lastName, education, occupation } = req.body;

    const postData = {
      firstName,
      lastName,
      education,
      occupation,
      createdTS: FieldValue.serverTimestamp(),
      lastModifiedTS: FieldValue.serverTimestamp(),
      comments: [],
    };

    const postRef = await db.collection("posts").add(postData);
    const postId = postRef.id;

    await db
      .collection("users")
      .doc(uid)
      .update({ posts: FieldValue.arrayUnion(postId)});

    res.send("");
  } catch (error) {
    console.error("Error creating post", error);
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  res.send("");
});

module.exports = router;
