const express = require("express");
const mongoose = require("mongoose");
const User = mongoose.model("User");

const router = express.Router();

router.post("/signup", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    const user = new User({ username, email, password });
    await user.save();

    const token = await user.generateAuthToken();
    res.status(201).send({ token });
  } catch (err) {
    return res.status(422).send(err.message);
  }
});

router.post("/signin", async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(422).send({ error: "Must provide email and password" });
  }

  try {
    const user = await User.findByCredentials(email, password);
    console.log(user);
    const token = await user.generateAuthToken();
    res.send({ token });
  } catch (e) {
    res.status(400).send({ error: e.message });
    // res.status(400).send({ error: "Unable to login" });
  }
});

module.exports = router;
