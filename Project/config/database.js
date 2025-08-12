const mongoose = require("mongoose");

// connecting to a database is an asynchronous operation — it takes time and might not complete instantly (e.g., due to network latency). 
// Using async allows us to await the completion of mongoose.connect(...) before proceeding.
const dbConncet = async function dbConncet() {
  await mongoose.connect(process.env.CONNECTION_URI).then(() => {
    console.log("DB CONNECTED");
  });
}

module.exports = dbConncet;