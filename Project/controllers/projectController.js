const project = require("../models/project");

const createProject = async (req, res) => {
  
  const { imageUrl, projectOwner, projectTitle, description, techStack, workExperienceLevel, projectContributor } = req.body;

  if (!imageUrl && !projectOwner && !projectTitle && !description && !techStack && !workExperienceLevel && !projectContributor) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const { _id } = req.user.user;
  const {firstname} = req.user.user;
  const {lastname} = req.user.user;
  console.log("222222222222222222", req.user.user._id);
  console.log("333333333333333333", req.user.user.firstname);
  console.log("333333333333333333", req.user.user.lastname);

  
  

  if (!_id) {
    return res.status(400).json({ message: "User not found" });
  }


  try {
    const projectOpening = await project.create({
      projectOwner: req.user.user.firstname,
      imageUrl,
      projectTitle,
      description,
      techStack,
      workExperienceLevel,
      projectContributor,
    });

    await projectOpening.save();
    
    console.log("11111111111111111111111",projectOpening);
    
    return res.status(200).json({ message: "Posted your opening", projectOpening });
  } 
  catch (error) {
    return res.status(500).json({ message: "Internal server error", err: error.message });
  }
};


module.exports = {createProject};