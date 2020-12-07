const express = require("express");
const router = express.Router();
const Joi = require("joi");
const gravatar = require("gravatar");
const User = require("../../Models/User");
const bcrypt = require("bcryptjs");

//@route  POST api/users
//@desc   Register user
//@access public

router.post("/", async (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    password: Joi.string().min(6).required(),
    avatar: Joi.string(),
    date: Joi.date(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  const { name, email, password } = req.body;

  try {
    //See if user exists

    let user = await User.findOne({
      email: email,
    });

    if (user) {
      res.status(400).send("user already exist");
    }
    //get users gravatar

    const avatar = gravatar.url(email, {
      s: "200",
      r: "pg",
      d: "mm",
    });

    user = new User({
      name,
      email,
      avatar,
      password,
    });

    const salt = await bcrypt.genSalt(10);

    user.password = await bcrypt.hash(password, salt);

    //encrypt password using bcrypt
    await user.save();

    res.send("User Registered");

    //return jwt
  } catch (err) {
    res.status(500).status("Server error");
  }
});

module.exports = router;
