/* 
DB_USER:hasimAmla
DB_PASS:FNAX7covgcpeFbvD
*/
import mongoose from "mongoose";
export const connectDB=async ()=>{
    await mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.ihmonoj.mongodb.net/blog-app`)
    console.log("DB CONNECT")
   
}