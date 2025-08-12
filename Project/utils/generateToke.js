const jwt = require("jsonwebtoken")

const generateToken = (user) => {
  var token = jwt.sign({user}, process.env.JWT_SECRET);
  return token
}

module.exports = generateToken