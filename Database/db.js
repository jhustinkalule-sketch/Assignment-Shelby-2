const mongoose = require("mongoose");
const databaseUrl = process.env.DATABASE;

module.exports = databaseUrl
  ? mongoose.connect(databaseUrl, { serverSelectionTimeoutMS: 10000 })
  : Promise.reject(new Error("DATABASE environment variable is required"));