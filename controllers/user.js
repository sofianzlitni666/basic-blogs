const User = require("../models/User");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

exports.register = async (req, res) => {
  try {
    const { firstname, lastname, email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "E-mail should be unique, try again!!" }] });
    }
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    // const new user
    const newUser = new User({ ...req.body });
    newUser.password = hashedPassword;

    // save
    await newUser.save();

    res.status(200).send({ msg: "registration successful", user: newUser });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "registration failed!!! " }] });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const foundUser = await User.findOne({ email });
    if (!foundUser) {
      return res
        .status(400)
        .send({ errors: [{ msg: "User or Email not found!!" }] });
    }
    const checkPassword = await bcrypt.compare(password, foundUser.password);
    if (!checkPassword) {
      return res.status(400).send({ errors: [{ msg: "Wrong Credentials!!" }] });
    }
    // const token
    const token = jwt.sign(
      {
        id: foundUser._id,
      },
      process.env.SECRET_KEY,
      { expiresIn: "1h" }
    );
    res
      .status(200)
      .send({ success: [{ msg: "login successful" }], user: foundUser, token });
  } catch (error) {
    res.status(400).send({ errors: [{ msg: "loggin failed!!" }] });
  }
};
