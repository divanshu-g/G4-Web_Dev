const profile = require("../models/profile");

const createProfile = async (req, res) => {
  
  const { imageURL, skills, workExperience, linkedinURL, githubUrl, codingPlatfrom, resumeUrl } = req.body;

  if ( !imageURL && !skills && !workExperience && !linkedinURL && !githubUrl && !codingPlatfrom && !resumeUrl) {
    return res.status(400).json({ message: "All Fields are required" });
  }

  const { _id } = req.user.user;

  if (!_id) {
    return res.status(400).json({ message: "User not found" });
  }

  try {
    const Userprofile = await profile.create({
      userid: _id,
      imageURL,
      skills,
      workExperience,
      linkedinURL,
      githubUrl,
      codingPlatfrom,
      resumeUrl,
    });

    const data = await Userprofile.save();
    console.log(Userprofile);
    return res.status(201).json({ message: "Profile Created", data });
  } catch (error) {
    return res
      .status(500)
      .json({ message: "Internal Server Error", err: error.message });
  }
};

const getProfile = async (req, res) => {
  const userProfile = await profile.find({});
  console.log(userProfile);
  return res.status(200).json({ message: "User Profile", userProfile });
};

const getProfilebyid = async (req, res) => {
  const id = req.params.id;
  const userProfile = await profile.findById(id);

  return res.status(200).json({ message: "User profile by id", userProfile });
};

const updateProfile = async (req, res) => {
  const {
    imageURL,
    skills,
    workExperience,
    linkedinURL,
    githubUrl,
    codingPlatfrom,
    resumeUrl,
  } = req.body;

  if (!imageURL && !skills && !workExperience && !linkedinURL && !githubUrl && !codingPlatfrom && !resumeUrl) {
    return res.status(400).json({ message: "All Fields are required" });
  }

  try {
    const { _id } = req.user.user;
    
    const update = await profile.findOneAndUpdate(
      { userid: _id },
      {
        imageURL,
        skills,
        workExperience,
        linkedinURL,
        githubUrl,
        codingPlatfrom,
        resumeUrl,
      }
    );
    return res.status(200).json({message: "Profile updated", update})
  } 
  catch (error) {
    return res.status(500).json({ message: "Internal Server Error" , err: error.message});
  }
};

module.exports = { createProfile, getProfile, getProfilebyid, updateProfile };
