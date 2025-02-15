import { connectDB } from "@/libery/config/db"
import { NextResponse } from "next/server"
import {writeFile} from 'fs/promises';
import BlogModal from "@/libery/models/BlogModel";

const LoadDB=async()=>{
 await connectDB()
};
LoadDB();
// api enpint for get blogs
export async function GET(request) {
    const blogId=request.nextUrl.searchParams.get("id");
    if (blogId) {
        const blog=await BlogModal.findById(blogId);
        return NextResponse.json({blog})
    } 
    const blogs =await BlogModal.find({});
    return NextResponse.json({blogs})
};
// api enpoint for uploading blogs
export async function POST(request){
    const formData=await request.formData();
    const timeStamp=Date.now();
    const image=formData.get('image');
    const imageByteData=await image.arrayBuffer();
    const buffer=Buffer.from(imageByteData);
    const path=`./public/${timeStamp}_${image.name}`;
    await writeFile(path,buffer);
    const imageUrl=`/${timeStamp}_${image.name}`;
    console.log(imageUrl)
    const blogData={
        title:`${formData.get('title')}`,
        description:`${formData.get('description')}`,
        category:`${formData.get('category')}`,
        author:`${formData.get('author')}`,
        image:`${imageUrl}`,
        autorImg:`${formData.get('authorImg')}`

    }
    await BlogModal.create(blogData);
    return NextResponse.json({sucess:true,msg:'blog added'})
}

// creating api endpoint to delete blog
export async function DELETE(request){
    try {
        const id=request.nextUrl.searchParams.get("id");
        
        const blog=await BlogModal.findById(id);
        // fs.unlink(`./public${blog.image}`,()=>{});
        await BlogModal.findByIdAndDelete(id);
        return NextResponse.json({msg:'particular blog deleted'})
    } catch (error) {
        console.log(error,'eroroDelete api')
    }
}