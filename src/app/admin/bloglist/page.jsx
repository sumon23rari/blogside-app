"use client"
import BlogTableItem from '@/components/AdminComponents/BlogTableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
    const [blogs,setBlogs]=useState([]);
    const fetchData=async()=>{
        try {
          const responseData=  await axios.get('/api/blog');
          setBlogs(responseData?.data?.blogs)  
        } catch (error) {
          console.log(error)  
        }
    };
    const deletedBlog=async(mongoId)=>{
        console.log(mongoId,'mongoId')
        try {
          const response=await axios.delete('/api/blog',{
            params:{
                id:mongoId
            }
          }) 
          toast.success(response?.data?.msg) 
          fetchData()
        } catch (error) {
            console.log(error,'deleteBolog SIngle')
            
        }
    }
    useEffect(()=>{
        fetchData ()
    });
    return (
        <div className=' pt-5 px-5 sm:pt-12 sm:pl-16'>
            <h1 className=' uppercase  font-medium '>All blogs</h1>
            <div className='relative h-[80vh]  max-w-[850px] overflow-x-auto mt-4 border border-gray-400  '>
                <table className='w-full text-sm text-gray-500 '>
                    <thead className='text-sm text bg-gray-700 text-left text-white uppercase'>
                        <tr>
        <th className='px-6 py-3'>Auther Name</th>
        <th className='px-6 py-3'>Blog Title</th>
        <th className='px-6 py-3'>Date</th>
        <th className='px-6 py-3'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                       {
                        blogs.map((blog,index)=><BlogTableItem key={index} blog={blog} deletedBlog={deletedBlog}/>)
                       }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default page;