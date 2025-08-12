const express = require("express");
require("dotenv").config();
const dbConncet = require("./config/database")
const app = express();
const PORT = process.env.PORT;

app.use(express.json());

const userRouter = require("./routes/userRoutes")
const profileRouter = require("./routes/profileRoutes");
const projectRouter =require("./routes/projectRoutes");

// ROUTES
// End point : user
app.use("/api/user", userRouter)

app.use("/api/profile", profileRouter);
app.use("/api/project", projectRouter);


dbConncet().then(() => {
  app.listen(PORT || 3000, () => {
    console.log(`Listening on port ${PORT}`);
  });
});
