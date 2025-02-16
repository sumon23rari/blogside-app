"use client"
import SubstableItem from '@/components/AdminComponents/SubstableItem';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const page = () => {
    const [emails,setEmails]=useState([])
    const getEmails=async()=>{
        try {
           const response=await axios.get('/api/email');
           console.log(response,'listEmail') 
           setEmails(response?.data?.emails)
        } catch (error) {
            console.log(error,'emailsgetError')
        }
    };
    const deleteSubscription=async(mongoId)=>{
        console.log(mongoId,'mongoId')
        try {
            const response=await axios.delete('/api/email',{
                params:{
                    id:mongoId
                }
            })
            toast.success(response?.data?.msg)
            getEmails();
            console.log(response,'response data deleteSubscri')
        } catch (error) {
            console.log(error,'error')
            toast.error(error?.message)
        }
       
    }
    useEffect(()=>{
        getEmails()
    },[])
    return (
        <div className='flex-1 pt-5 px-5 sm:pt-12 sm:pl-16'>
             <h1 className=' uppercase  font-medium '>All subcribtions</h1>
            <div className='relative h-[80vh]  max-w-[850px] overflow-x-auto mt-4 border border-gray-400  '>
            <table className='w-full text-sm text-gray-500 '>
                    <thead className='text-sm text bg-gray-700 text-left text-white uppercase'>
                        <tr>
                            <th scope='col' className='hidden sm:block px-6 py-3'>Sl_No</th>
                            <th scope='col' className='px-6 py-3'>Email Suscribtion</th>
                            <th scope='col' className='hidden sm:block px-6 py-3'>Date</th>
                            <th scope='col' className='px-6 py-3'>Action</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                emails.map((email,index)=><SubstableItem email={email} index={index} deleteSubscription={deleteSubscription} key={index}></SubstableItem>)
                            }
                            </tbody>
                            </table>
            </div>
        </div>
    );
};

export default page;