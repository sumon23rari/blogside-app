"use client"
import { assets, blog_data } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const page = ({params}) => {
    const { id } = React.use(params); 
    const [data,setData]=useState(null)
    const fetchData=async()=>{
        try{
            const response=await axios.get('/api/blog',{
                params:{
                   id
                }
            })
            setData(response?.data?.blog)
        }
        catch{
            console.log('ddsf')
        }
    }
    useEffect(()=>{
        fetchData()
    },[])
    console.log(data,'dads')
 const imageUrl=data?.author_img;
 const imageUrl2=data?.image;

    return (
        <div className='bg-gray-200 px-5 py-5 md:px-12 lg:px-28'>
          
     <div className='text-center my-24'>
        <h1 className='text-2xl sm:text-5xl font-semibold max-w-[700px] mx-auto'>{data?.title}</h1>
        {imageUrl && <Image className='mx-auto mt-6 border border-white rounded-full' src={imageUrl} 
        width={60} height={60} alt=''/>}
        <p className='mt-1 pb-2 text-lg  max-w-[740px] mx-auto'>{data?.author}</p>
        </div> 
        <div className='mx-5 max-w-[800px] md:mx-auto mt-[-100px] mb-10'>
           {imageUrl2 && <Image className='border-4 border-white' src={imageUrl2} width={1280} height={720} alt=''/>}
            <h1 className='my-8 text-[26px] font-semibold'>Introduction</h1>
            <p >{data?.description}</p>
            <h3 className='my-5 text-[18px] font-semibold'>step-1:self reflaction and Goal Settings</h3>
            <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eos sapiente inventore vero veritatis voluptates.</p>
            <h3 className='my-5 text-[18px] font-semibold'>step-1:self reflaction and Goal Settings</h3>
            <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eos sapiente inventore vero veritatis voluptates.</p>
            <h3 className='my-5 text-[18px] font-semibold'>step-1:self reflaction and Goal Settings</h3>
            <p className='my-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum eos sapiente inventore vero veritatis voluptates.</p>
            <div className='my-24'>
        <p className='text-black font-semibold my-4'>share this article on social media</p>
        <div className='flex'>
            <Image src={assets.facebook_icon|| null} width={50} alt=''/>
            <Image src={assets.twitter_icon|| null} width={50} alt=''/>
            <Image src={assets.googleplus_icon|| null} width={50} alt=''/>
        </div>
            </div>
            </div> 
        </div>
    );
};

export default page;