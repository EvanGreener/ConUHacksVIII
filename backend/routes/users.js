const express = require("express");
var router = express.Router();
const auth = require("../middleware/auth");
const { getFirestore } = require("firebase-admin/firestore");
const db = getFirestore();

// Route to create a user
router.post("/sign-up-regular", auth, async (req, res) => {
  try {
    const { uid, firstName, lastName, education, occupation } = req.body;

    // Check if user already exists
    const doc = await db.collection("users").doc(uid).get();
    // Return 210 because when signing in with Google, the user is already created
    // TODO: add an independent sign up route
    if (doc.exists) {
      return res.status(210).send("User already exists");
    }

    await db.collection("users").doc(uid).set({
      firstName,
      lastName,
      education,
      occupation,
    });
    return res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).send(error.message);
  }
});

router.post("/sign-up-researcher", auth, async (req, res) => {
  try {
    const { uid, firstName, lastName, education, occupation } = req.body;

    // Check if user already exists
    const doc = await db.collection("users").doc(uid).get();
    // Return 210 because when signing in with Google, the user is already created
    // TODO: add an independent sign up route
    if (doc.exists) {
      return res.status(210).send("User already exists");
    }

    await db.collection("users").doc(uid).set({
      firstName,
      lastName,
      education,
      occupation,
    });
    return res.status(201).send("User created successfully");
  } catch (error) {
    console.error("Error creating user", error);
    res.status(500).send(error.message);
  }
});
module.exports = router;
