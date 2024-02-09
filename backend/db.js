const mongoose = require('mongoose');
const mongoURI = 'mongodb://localhost:27017/'

async function connectToMongo() {
    await mongoose.connect(mongoURI).then(() => console.log("Connected to Mongo Successfully"));
}

module.exports = connectToMongo;