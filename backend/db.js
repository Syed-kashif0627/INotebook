const mongoose = require('mongoose');
const mongoURI = "mongodb://localhost:27017/inotebook?directConnection=true&ssl=false&readPreference=primary&appname=MongoDB%20Compass";

const connectToMongo = async () => {
    try {
        await mongoose.connect(mongoURI);
        console.log("Connected to MongoDB successfully");
    } catch (err) {
        console.error(err);
    }
}

module.exports = connectToMongo;
