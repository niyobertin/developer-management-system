import mongoose from "mongoose";

const developer = mongoose.Schema({
    first_name:String,
    second_name:String,
    gender:String,
    email:String,
    specification:String,
})

export default mongoose.model("Post",developer);