const express = require("express")
const projects = require("../controllers/projectController");
const authMiddlware = require("../middlewares/authMiddlware")

const router = express.Router();

router.post("/", authMiddlware, projects.createProject)

module.exports = router