import mongoose from "mongoose"
const msgschema = new mongoose.Schema({
    senderId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user",
        required:true
    },
    receiverId:{
        type:mongoose.SchemaTypes.ObjectId,
        ref:"user",
        required:true
    },
    text:{
        type:String,
        required:true
    }
},{timestamps:true})

const messege = mongoose.model("messege",msgschema)
export default messege