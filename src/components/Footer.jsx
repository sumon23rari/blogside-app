"use client";
import { assets } from '@/assets/assets';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import React from 'react';

const Footer = () => {
    
    const date=new Date().getFullYear();
    const pathName=usePathname();
    if (!pathName.includes("admin")) {
        return (
            <div className='flex justify-around  flex-col gap-2 sm:gap-0 sm:flex-row bg-black py-5 items-center'>
               <Image src={assets.logo_light} alt='image' width={120}/> 
               <p className='text-sm text-white'>alll right reserved. copyright@blogger{ date} </p>
               <div className='flex'>
                <Image src={assets.facebook_icon} alt='' width={40}/>
                <Image src={assets.twitter_icon} alt='' width={40}/>
                <Image src={assets.googleplus_icon} alt='' width={40}/>
               </div>
            </div>
        );
    } else {
        return <>
        </>
    }
  
};

export default Footer;