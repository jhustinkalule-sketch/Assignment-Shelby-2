const mongoose = require("mongoose");
const db = process.env.DATABASE;

mongoose.connect(db)
  .then(() => console.log("✅ MongoDB Database Connected Successfully!"))
  .catch((err) => console.log("❌ Database Connection Error:", err));

module.exports = mongoose.connection;