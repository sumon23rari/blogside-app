"use client"
import Image from 'next/image';
import React from 'react';


const BlogTableItem = ({blog,deletedBlog}) => {
    console.log(blog);
    const imageUrl=blog.image;
    // const inputData=blog?.date;
    // const formattedData=format(new Date(inputData),'dd/MM/yy');
    const blogDate=new Date(blog?.date);
 console.log(blogDate)
    return (
     <tr className='bg-white border-b'>
        <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
           {imageUrl && <Image width="40" height={"40"} src={imageUrl} alt="imageUrl"/> } &nbsp; <span>{blog?.author?blog?.author:"no title"}</span>
        </th>
        <td className='px-6 py-4'>{blog?.title}</td>
        <td className='px-6 py-4'>{blogDate?.toDateString()}</td>
        <td className='px-6 py-4 cursor-pointer' onClick={()=>deletedBlog(blog?._id)}>X</td>
     </tr>
    );
};

export default BlogTableItem;