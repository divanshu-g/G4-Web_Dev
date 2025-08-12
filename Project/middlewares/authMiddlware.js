const jwt = require("jsonwebtoken");
const User = require("../models/user");

const authMiddlware = async (req, res, next) => {
  try {
    const { authorization } = req.headers;

    const token = authorization.split(" ")[1];
    
    if (!token) {
      res.status(404).json({ message: "Token not Found" });
    }
    const isValid = jwt.verify(token, process.env.JWT_SECRET);
    
    req.user = isValid;
    
    next();
  } 
  catch (error) {
    return res.status(500).json({ message: "Invalid or Expired token" });
  }
};

module.exports = authMiddlware;
