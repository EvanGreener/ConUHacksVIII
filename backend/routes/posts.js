const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore, FieldValue } = require("firebase-admin/firestore");
const db = getFirestore();

router.post("/create-post/:uid", auth, async (req, res) => {
  try {
    const uid = req.params.uid;
    const { title, description, attachmentURL } = req.body;

    const user = (await db.collection("users").doc(uid).get()).data();

    if (user.verified == null) {
      return res.status(210).send("User is not a researcher");
    }

    const postData = {
      author: uid,
      title,
      description,
      attachmentURL,
      createdTS: FieldValue.serverTimestamp(),
    };

    await db.collection("posts").add(postData);

    return res.status(201).send("Post created successfully");
  } catch (error) {
    console.error("Error creating post", error);
    res.status(500).send(error.message);
  }
});

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const post = await db.collection("posts").doc(id).get();
  return res.status(200).json(post.data());
});

router.get("/latest", async (req, res) => {
  const postRef = db.collection("posts");
  const snapshot = await postRef.orderBy("createdTS", "desc").limit(3).get();
  const postData = snapshot.docs.map((post) => post.data());
  console.log(postData);
  return res.status(200).json(postData);
});

module.exports = router;
