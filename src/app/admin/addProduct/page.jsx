"use client"
import { assets } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
    const [image,setImage]=useState(false);
    const [data,setData]=useState({
        title:"",
        description:"",
        category:"Startup",
        author:"Alex bennet",
        autherImage:"/auther_img.png"
    })
    const onChangeHandler=(e)=>{
        const name=e.target.name;
        const value=e.target.value;
        setData(data=>({...data,[name]:value}))
        console.log(data,name,value)
    }
    const handleSubmithandler=async(e)=>{
        e.preventDefault();
        const formData=new FormData();
        formData.append("title",data.title);
        formData.append("description",data.description);
        formData.append("category",data.category);
        formData.append("author",data.author);
        formData.append("autherImage",data.autherImage);
        formData.append('image',image);
        await axios.post('/api/blog',formData)
      .then((response)=>{
        console.log(response?.data?.success)
        toast.success(response.data.success)
      })
      .catch((error)=>{
        toast.error(error)
        console.log(error)
      })
       
    }
    return (
        <>
         <form className=' pt-5 px-5 sm:pt-12 sm:pl-16' onSubmit={handleSubmithandler}>
            <p className='text-xl'>Upload thumbail</p>
            <label htmlFor='image'>
                <Image src={!image?assets.upload_area:URL.createObjectURL(image)||null} width={140} height={70} alt='image'/>
            </label>
            <input onChange={(e)=>setImage(e.target.files[0])} type='file' id="image" hidden required/>
            <p className='text-xl mt-4'>Blog title</p>
            <input name='title' onChange={onChangeHandler} value={data.title} className='w-full sm:w-[500px] pt-4 px-4 py-3 border' type='text' placeholder='type here' required/>
            <p className='text-xl mt-4'>Blog description</p>
            <textarea name='description' onChange={onChangeHandler} value={data.description} className='w-full sm:w-[500px] pt-4 px-4 py-3 border' type='text' rows={6} placeholder='write content here' required/>
            <p className='text-xl mt-4'>Blog category</p>
            <select name='category' onChange={onChangeHandler} value={data.category} className='w-40 mt-4 px-4 py-3 border text-gray-500'>
                <option value={'Technology'}>Technology</option>
                <option value={'Startup'}>Startup</option>
                <option value={'Lifestyle'}>Lifestyle</option>
            </select>
            <br/>
            <button type='submit'  className='mt-8 w-40 h-12 bg-black text-white'>add</button>
            </form>   
        </>
    );
};

export default page;