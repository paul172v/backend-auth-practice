require("dotenv").config({ path: "./config.env" });
const mongoose = require("mongoose");
const app = require("./app");

//// Connect to database
const db = process.env.DATABASE_URL.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

mongoose
  .connect(db)
  .then(console.log("✅ Connected to database"))
  .catch("❌ Could not connect to database");

//// Turn off StrictQuery
mongoose.set("strictQuery", false);

//// Listen to server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`✅ Server running on port... ${port}`));
