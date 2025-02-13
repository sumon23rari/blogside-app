import { assets } from '@/assets/assets';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const BlogsItem = ({blog}) => {
  console.log(blog,'bddddddddd')
    const {title,description,image,category,_id}=blog;
    const imageUrl = image;
    return (
        <div className='max-w-[330px] sm:max-w-[300px] bg-white border border-black transition duration-150 ease-in-out  hover:shadow-[-7px_7px_0px_#000000]'>
          <Link href={`/blogs/${_id}`}>
          <Image src={imageUrl || null} alt="image" width={400} height={400} className='border-b border-black'/>
            <p className='ml-5 mt-5 px-1 inline-block bg-black text-white text-sm'>{category}</p>
            <div className="p-5">
                <h5 className='mb-2 text-lg font-medium tracking-tight text-gray-900'>{title}</h5>
                <p className='mb-3 text-sm tracking-tight text-gray-700'>{description}</p>
                <div className='inline-flex items-center py-2 font-semibold text-center'>
                <span  className='flex items-center mx-2'>    Reed more <Image src={assets.arrow} className='ml-2' alt="image" width={12}/>
                </span>
                </div>
            </div>
          </Link>
        </div>
    );
};

export default BlogsItem;