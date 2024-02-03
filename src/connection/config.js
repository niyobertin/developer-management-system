import mongoose from "mongoose";
//connecting database with express server
const url = 'mongodb://127.0.0.1/developer-profile';

  const connectDb = async () =>{
    try{
    mongoose.set("strictQuery", false);
    mongoose.connect(url)
    console.log("Connection successifully")
}catch(err){
console.log(err);
}
  }
export default connectDb;