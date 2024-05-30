const mongoose = require("mongoose");

async function connectToDb() {
  try {
    await mongoose.connect(
      "mongodb+srv://msilviu42:lj414yIzhsCxzFpS@cluster0.d07v2oy.mongodb.net/db-contacts"
    );
    console.log("Database connection successful");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
}

module.exports = connectToDb;
