import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Sidebar = () => {
    return (
        <div className='flex flex-col bg-slate-100'>
            <div className='px-2 sm:pl-14 py-3 border border-black'>
      
        <Link href={'/'} className="cursor-pointer"> <Image src={assets.logo} alt='logo' width={120} className='w-[130px] sm:w-auto'/></Link>
            </div>
            <div className='w-24 sm:w-72  h-[100vh] relative py-12 border border-black'>
                <div className='w-[50%] sm:w-[80%] absolute right-2'>
                <Link href='/admin/addProduct' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[5px_5px_0px_#000000]'>
                    <Image src={assets.add_icon} alt='' width={28}/><p>Add blog</p>
                </Link>
                <Link href='/admin/bloglist' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[5px_5px_0px_#000000]'>
                    <Image src={assets.blog_icon} alt='' width={28}/><p>blog list</p>
                </Link>
                <Link href='/admin/subcriptions' className='flex items-center border border-black gap-3 font-medium px-3 py-2 bg-white shadow-[5px_5px_0px_#000000]'>
                    <Image src={assets.email_icon} alt='' width={28}/><p>subcriptions</p>
                </Link>
                
                </div>
             
            </div>
        </div>
    );
};

export default Sidebar;