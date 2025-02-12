import mongoose from "mongoose"

const Scema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    author:{
        type:String,
        require:true
    },
    image:{
        type:String,
        require:true
    },
    authorImg:{
        type:String,
        require:true
    },
    date:{
        type:Date,
        default:Date.now()
    }
})
const BlogModal=mongoose.models.blog || mongoose.model('blog',Scema);
export default BlogModal;