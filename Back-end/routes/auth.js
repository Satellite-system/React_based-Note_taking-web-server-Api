const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const fetchuser = require("../middleware/fetchuser");

const JWT_SECRET = "apnabhai@rav!1";

// ROUTE 1: create a User using: POST "/api/auth/createuser", No login Required, Doesn't require Auth
router.post(
  "/createuser",
  [
    //Incase of error/Invalid email message: Enter a valid email will be printed
    body("email", "Enter a valid email").isEmail(), // email must be an email
    body("name", "must be at least 3").isLength({ min: 3 }), // name must be at least 3 chars long
    body("password", "atlest 6").isLength({ min: 6 }), //password must be at least 6 chars long
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success, errors: errors.array() });
    }
    //check if the user with same email already exists
    try {
      let user = await User.findOne({ email: req.body.email });
      if (user) {
        return res
          .status(400)
          .json({success, error: "Sorry this Email already exists" });
      }
      //To add Salt in password and then hashing whole, after that,hashed password is stored in db
      // Which makes it difficult to crack password through Rainbow table,
      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      // Create a new User
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      });

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // res.json(user)
      success = true;
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 2: Authenticating/Logging a User using: POST "/api/auth/login", no LOGIN required
router.post(
  "/loginuser",
  [
    //Incase of error/Invalid email message: Enter a valid email will be printed
    body("email", "Enter a valid email").isEmail(), // email must be an email
    body("password", "Password cannot be Blank").isLength({min:6}), //password must be at least 6 chars long
  ],
  async (req, res) => {
    // Finds the validation errors in this request and wraps them in an object with handy functions
    const errors = validationResult(req);
    let success = false;
    if (!errors.isEmpty()) {
      return res.status(400).json({success,errors: errors.array() });
    }

    const { email, password } = req.body; //Destructured Elements
    try {
      let user = await User.findOne({ email });
      if (!user) {
        // this means user with entered email doesnot exits
        return res.status(400).json({success, error: "Incorrect Email or Password" });
      }

      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        //Incorrect Password Entered
        success = false;
        return res.status(400).json({success, error: "Incorrect Email or Password" });
      }

      const data = {
        user: {
          id: user.id,
        },
      };
      const authToken = jwt.sign(data, JWT_SECRET);

      // res.json(user)
      success = true;
      res.json({success, authToken });
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
);

// ROUTE 3: getting Logged User using: POST "/api/auth/getuser",LOGIN required
router.post("/getuser", fetchuser, async (req, res) => {
  try {
    const userId = req.user.id;
    const user = await User.findById(userId).select("-password");
    res.send(user);
  } catch (error) {
    console.error(error.message);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
