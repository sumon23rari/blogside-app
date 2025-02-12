import { assets } from '@/assets/assets';
import Sidebar from '@/components/AdminComponents/Sidebar';
import Image from 'next/image';
import React from 'react';
import { ToastContainer} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const layout = ({children}) => {
    return (
        <>
            <div className='flex'>
                <ToastContainer theme='black'/>
            <Sidebar></Sidebar>
          
            <div className='flex flex-col w-full '>
                <div className='flex items-center justify-between w-full py-3 max-h-[60px] px-12 border-b border-black'>
                    <h3 className='font-medium'>Admin Pannel</h3>
                    <Image src={assets.profile_icon} width={40} alt="dd"/>
                </div>
                {children}
            </div>
            </div>
           
           
        </>
    );
};

export default layout;