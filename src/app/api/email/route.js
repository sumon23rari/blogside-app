import { connectDB } from "@/libery/config/db";
import EmailModel from "@/libery/models/EmailModel";
import { NextResponse } from "next/server";

const LoadDB=async()=>{
    await connectDB();
}
LoadDB()
export async function POST(request){
    const formData=await request.formData();
    const emailData={
        email:`${formData.get('email')}`
    }
    await EmailModel.create(emailData)
    return NextResponse.json({success:true,msg:"Email Subscribed"})
}
export async function GET(request){
    const emails=await EmailModel.find({})
    return NextResponse.json({emails})
}
export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        if (id) {
            await EmailModel.findByIdAndDelete(id)
        return NextResponse.json({success:true,msg:'email deleted'})   
        } else {
            return NextResponse.json({msg:'email id not found'})   
        }
     
    } catch (error) {
        NextResponse.json({error:error})
    }
}