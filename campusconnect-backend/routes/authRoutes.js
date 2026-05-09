const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

// SIGNUP
router.post("/signup", async (req, res) => {
  const { fullName, regNo, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({
    fullName,
    regNo,
    email,
    password: hashed
  });

  await user.save();
  res.json({ message: "User created successfully" });
});

// LOGIN
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ message: "User not found" });

  const isMatch = await bcrypt.compare(password, user.password);

  if (!isMatch) return res.status(400).json({ message: "Wrong password" });

  const token = jwt.sign(
  { id: user._id },
  process.env.JWT_SECRET,
  { expiresIn: "1d" }
);

  res.json({ token, user });
});

module.exports = router;