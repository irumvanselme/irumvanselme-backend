import mongoose from "mongoose";

const db = "mongodb://localhost:27017/anselme";

const connectToDB = async () => {
    try {
        await mongoose.connect(db, {
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useFindAndModify: false,
        });
        console.log("MongoDB is Connected...");
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
};

connectToDB();
