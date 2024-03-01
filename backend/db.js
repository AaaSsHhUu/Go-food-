const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://ashu:thisismydatabase@gofood.rcfdqnn.mongodb.net/?retryWrites=true&w=majority&appName=GoFood'

async function connectDB() {
  await mongoose.connect(mongoURI);
}

module.exports = connectDB;