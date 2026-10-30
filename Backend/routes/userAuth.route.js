const { Router } = require("express");
const userDetails = require("../model/userSchema");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const userAuthRouter = Router();

// SIGNUP
userAuthRouter.post("/signup", async (req, res) => {
  try {
    const existingUser = await userDetails.findOne({
      email: req.body.email,
    });
    if (existingUser) {
      return res.status(409).json({ status: "ERROR", message: "Email already exists" });
    }
    const newPassword = await bcrypt.hash(req.body.password, 10);
    await userDetails.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      password: newPassword,
      token: "",
    });
    res.status(201).json({ status: "OK" });
  } catch (err) {
    console.log(err);
    res.status(500).json({ status: "ERROR", error: "Unable to create account" });
  }
});

// LOGIN
userAuthRouter.post("/login", async (req, res) => {
  try {
    const user = await userDetails.findOne({ email: req.body.email });
    if (!user) {
      return res.status(401).json({
        status: "ERROR",
        error: "Invalid email or password",
      });
    }

    const isPasswordValid = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isPasswordValid) {
      return res.status(401).json({
        status: "ERROR",
        error: "Invalid email or password",
      });
    }

    if (!process.env.SECRET_KEY) {
      console.error("SECRET_KEY environment variable is required for login");
      return res.status(500).json({
        status: "ERROR",
        error: "Login is temporarily unavailable",
      });
    }

    const token = jwt.sign(
      {
        firstname: user.firstname,
        lastname: user.lastname,
        email: user.email,
      },
      process.env.SECRET_KEY
    );
    await userDetails.findOneAndUpdate(
      { email: req.body.email },
      { token }
    );
    return res.json({ status: "OK", user: token });
  } catch (err) {
    console.error("Login failed:", err);
    return res.status(500).json({
      status: "ERROR",
      error: "Unable to log in. Please try again.",
    });
  }
});

// LOGOUT
userAuthRouter.post("/logout", async (req, res) => {
  try {
    const { token } = req.headers;
    const user = await userDetails.findOne({ token: token });
    console.log('user:', user)
    if (user) {
      user.token = "";
      await user.save();
      res.status(200).json({ message: "logout successfully" });
    } else {
      res.status(400).json({ error: "invalid token" });
    }
  } catch (err) {
    console.log(err);
  }
});

module.exports = userAuthRouter;
