import mongoose from "mongoose";

const CommentShema = new  mongoose.Schema({
text : {
    type:String,
    requred: "Text is requird"
},
createdAt:{
    type:Date,
    default:Date.now
}

})

const model = mongoose.model("Comment", CommentShema);
export default model;