const express = require("express");
const router = express.Router();
const { add, get } = require("../data/users");
const { sign, verify } = require("jsonwebtoken");
const { compare } = require("bcryptjs");

const KEY = "STUPIDSECRET";

router.post("/signup", async (req, res, next) => {
  try {
    const data = req.body;
    const newUser = await add(data);
    const msg = newUser.email;
    const authToken = sign({ msg }, KEY, { expiresIn: "1h" });

    res
      .status(201)
      .json({ message: "User Created", user: newUser, token: authToken });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Failed to create user" });
  }
});

router.post("/login", async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  let user;
  try {
    user = await get(email);
  } catch (error) {
    return res.status(401).json({ message: "User doesnt exist" });
  }

  const pw = await compare(password, user.password);
  if (!pw) {
    return res.status(401).json({ message: "Invalid Password" });
  }

  const token = sign({ email: user.email }, KEY, { expiresIn: "1h" });
  res.json({ email: email, token: token });
});

module.exports = router;
