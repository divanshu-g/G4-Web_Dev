const express = require("express");
const Userprofile = require("../controllers/profileController");
const authMiddlware = require("../middlewares/authMiddlware")

const router = express.Router();

router.post("/",authMiddlware, Userprofile.createProfile);
router.get("/", Userprofile.getProfile);
router.get("/:id", Userprofile.getProfilebyid);
router.put("/update", authMiddlware,Userprofile.updateProfile);
module.exports = router