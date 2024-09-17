const mongoose = require('mongoose')
require('dotenv').config()

const db = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    })
    console.log('Successfully connected to the database');
  } catch (error) {
    console.log("Error to connect database", error);
  }
}
db()
module.exports = mongoose