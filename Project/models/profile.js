const mongoose = require("mongoose");
const { Schema } = mongoose;

const profile = new Schema({
  userid: { type: Schema.Types.ObjectId, required: true },
  imageURL: { type: String, required: true },
  skills: { type: String, required: true },
  workExperience: { type: String, required: true },
  linkedinURL: { type: String, required: true },
  githubUrl: { type: String, required: true },
  codingPlatfrom: { type: String, required: true },
  resumeUrl: { type: String, required: true },
});

module.exports = mongoose.model("userProfile", profile);
