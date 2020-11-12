import mongoose from "mongoose";

const db =
    "mongodb+srv://anselme:123@cluster0.gu14c.mongodb.net/<irumvanselme>?retryWrites=true&w=majority";

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
