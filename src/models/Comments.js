import mongoose from "mongoose";
const {Schema, model} = mongoose;


const CommentSchema = new Schema({

    email: {
        type: String,
        default: "No enviado"
    },
    message:{
        type: String,
        require: true
    }



})


export default model("comments", CommentSchema)