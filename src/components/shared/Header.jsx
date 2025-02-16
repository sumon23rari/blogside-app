"use client";
import { assets } from '@/assets/assets';
import axios from 'axios';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Header = () => {
    const pathName=usePathname();
    const [email,setEmail]=useState('');
    console.log(email,'email')
    const onSubmitHandler=async(e)=>{
        e.preventDefault()
        const formData = new FormData();
        formData.append("email", email);

        try {
            const res = await axios.post('/api/email', formData);
            console.log(res?.data?.success, 'Response Success');
            toast.success(res?.data?.msg);
            setEmail('');
        } catch (error) {
            toast.error(error.response?.data?.msg || 'Something went wrong');
            console.log('Error:', error);
        }
    }
    if (!pathName.includes("admin")) {
        return (
            <div className='py-5 px-5 md:px-12 lg:px-28'>
                <div className='flex justify-between items-center'>
              <Link href={'/'} className="cursor-pointer"> <Image src={assets.logo} alt='logo' width={180} className='w-[130px] sm:w-auto'/></Link>
                    <button className='flex items-center gap-2 font-medium py-1 px-3 sm:py-3 sm:px-6 border border-black shadow-[-7px_7px_0px_#000000]'>Get Started <Image src={assets.arrow} alt='image'/></button>
                </div>
                <div className='text-center my-8'>
                    <h1 className='text-3xl sm:text-5xl font-medium'>latest blogs</h1>
                    <p className='text-center max-w-[740px] m-auto mt-4 text-xl sm:text-base'>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptatem aut explicabo itaque labore, blanditiis vitae? Cum enim eius impedit.
                    </p>
            <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]' onSubmit={onSubmitHandler}>
                        <input type='email' onChange={(e)=>setEmail(e.target.value)} value={email} placeholder='enter your email' className='pl-4 outline-none'/>
                        <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white'  type='submit'>subcribe</button>
                    </form>
                </div>
            </div>
        );    
    }
    else{
        return <>
        </>
    }
  
};

export default Header;