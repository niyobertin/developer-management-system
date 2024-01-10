import mongoose from "mongoose";
//connecting database with express app
const url = 'mongodb://127.0.0.1/edeveloper-profile';
  const connectDb = async () =>{
try{
    mongoose.set("strictQuery", false);
    mongoose.connect(url)
    console.log("Connection successifully")
}catch (err){
console.log(err);
}
  }
   




export default connectDb;