import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();


mongoose.connect(process.env.MONGO_URL,
{
    useNewUrlParser:true,
    useFindAndModify:false
}
);

const db = mongoose.connection;

const handleOpen = () => console.log("Conneted to DB");
const handleError = error => console.log("error");

db.once("open", handleOpen);
db.on("error", handleError);