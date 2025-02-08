import React from 'react';

const Header = () => {
    return (
        <div className='py-5 px-5 md:px-12 lg:px-28'>
            <div className='flex justify-between items-center'>
                <h2>log</h2>
                <button className='py-2 px-2 sm:px-8 border border-black shadow-[-7px_7px_0px_#000000]'>click me</button>
            </div>
            <div className='text-center my-8'>
                <h1 className='text-3xl sm:text-5xl font-medium'>latest blogs</h1>
                <p className='text-center max-w-[740px] m-auto mt-4 text-xl sm:text-base'>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Suscipit voluptatem aut explicabo itaque labore, blanditiis vitae? Cum enim eius impedit.
                </p>
                <form className='flex justify-between max-w-[500px] scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0px_#000000]'>
                    <input type='email' placeholder='enter your email' className='pl-4 outline-none'/>
                    <button className='border-1 border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white' type='submit'>subcribe</button>
                </form>
            </div>
        </div>
    );
};

export default Header;