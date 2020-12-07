const express = require("express");
const router = express.Router();
const Joi = require("joi");

//@route  POST api/users
//@desc   Register user
//@access public

router.post("/", (req, res) => {
  const schema = Joi.object({
    name: Joi.string().required(),
  });

  const { error } = schema.validate(req.body);

  if (error) {
    res.status(400).send(error.details[0].message);
    return;
  }

  res.send("User Route without error");
});

module.exports = router;
