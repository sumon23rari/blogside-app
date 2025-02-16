import React from 'react';

const SubstableItem = ({email,index}) => {
    const date=new Date(email?.date)
    return (
        <tr className='bg-white border-b text-center'>
              <th scope='row' className='items-center gap-3 hidden sm:flex px-6 py-4 font-medium text-gray-900 whitespace-nowrap'>
                {index+1}
              </th>
              <td className=''>{email?.email}</td>
              <td className=''>{date?.toDateString()}</td>
              <td className='cursor-pointer'>X</td>
        </tr>
    );
};

export default SubstableItem;