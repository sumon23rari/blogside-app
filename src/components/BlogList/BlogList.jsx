import { blog_data } from '@/assets/assets';
import React, { useEffect, useState } from 'react';
import BlogsItem from '../shared/BlogItem/BlogsItem';
import axios from 'axios';

const BlogList = () => {
    const [menu,setMenu]=useState('All');
    const [blogs,setBlogs]=useState([]);

    const fetchBlog = async () => {
        try {
            const response = await axios.get('/api/blog');
            const blogData=response?.data?.blogs;
            setBlogs(blogData);
            console.log(response?.data?.blogs);
        } catch (error) {
            console.error("Error fetching blogs:", error);
        }
    };

   useEffect(()=>{
    fetchBlog()
    console.log(blogs,'blogs useEffect')
   },[])
   console.log(blogs,'blogs')
    
    return (
        <div>
            <div className='flex justify-center gap-6 my-10'>
        <button onClick={()=>setMenu('All')} className={menu==="All"?'bg-black text-white py-1 px-4 rounded-sm':""}>All</button>
        <button onClick={()=>setMenu('Technology')} className={menu==="Technology"?'bg-black text-white py-1 px-4 rounded-sm':""}>Technology</button>
        <button onClick={()=>setMenu('Startup')} className={menu==="Startup"?'bg-black text-white py-1 px-4 rounded-sm':""}>Startup</button>
        <button onClick={()=>setMenu('Lifestyle')} className={menu==="Lifestyle"?'bg-black text-white py-1 px-4 rounded-sm':""}>Lifestyle</button>
        
            </div>
            <div className='flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24'>
                {/* {
                    blogs?.filter((item)=>menu==="All"?true:item.category===menu)?.map((blog)=><BlogsItem blog={blog} key={item._id}></BlogsItem>)
                } */}
                {
                    blogs?.filter((item)=>menu==="All"?true:item.category===menu)?.map((blog)=><BlogsItem key={blog._id} blog={blog}></BlogsItem>)
                }
            </div>
        </div>
    );
};

export default BlogList;