const { default: mongoose } = require("mongoose")

require('dotenv').config();


const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_URI);

        console.log("Mongo Db connected!!");

    } catch (error) {
        console.error(error.message);
        process.exit(1);

    }

}

module.exports=connectDB;