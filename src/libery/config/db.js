/* 
DB_USER:hasimAmla
DB_PASS:FNAX7covgcpeFbvD
*/
import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect(`mongodb+srv://hasimAmla:FNAX7covgcpeFbvD@cluster0.ihmonoj.mongodb.net/blog-app`)
    console.log("DB CONNECT")
}