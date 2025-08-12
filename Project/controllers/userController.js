const User = require("../models/user");
const bcrypt = require("bcrypt");
const generateToken = require("../utils/generateToke");
const validator =  require('validator');

const registerUser = async (req, res) => {
  const { firstname, lastname, emailId, password } = req.body;

  // Validation
  if (!firstname || !emailId || !password) {
    return res.status(400).send({ message: "Please enter valid details" });
  }
  if(!validator.isEmail(emailId)){
    return res.status(400).send({message: "Please Provide Valid Email"});
  }
  if(!validator.isStrongPassword(password)){
    return res.status(400).send({message: "Password is not Correct"})
  }
  try {
    // Check the user existence of user
    const userExist = await User.findOne({ emailId });
    if (userExist) {
      return res
        .status(400)
        .json({ message: "Already exists", user: userExist });
    }

    const hashedPass = await bcrypt.hash(password, 10);

    // Create user
    const newUser = await User.create({
      firstname,
      lastname,
      emailId,
      password: hashedPass,
    });
    console.log(newUser);

    await newUser.save();
    const token = generateToken(newUser);
    return res.status(201).json({ message: "User Created", newUser, token });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

const loginUser = async (req, res) => {
  const { emailId, password } = req.body;

  // validation
  if (!emailId || !password) {
    return res.status(400).json({ message: "No user found" });
  }

  try {
    const userExists = await User.findOne({ emailId });
    if (!userExists) {
      return res.status(400).json({ message: "No user found" });
    }

    const Valid = bcrypt.compare(userExists.password, password);

    if (!Valid) {
      return res.status(400).json({ message: "Incorrect Password" });
    }
    const token = generateToken(userExists);
    return res.status(200).json({ message: "LoggedIn", token });
  } catch (error) {
    return res.status(500).json({ message: "Error" });
  }
};

module.exports = { registerUser, loginUser };
