import React from 'react'

const TopCards = () => {
    return (
        <div className='grid lg:grid-cols-5  gap-4 p-4'>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$7,890</p>
                    <p className='text-gray-600'>This Month</p>
                </div>
                <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+18%</span>
                </div>
            </div>
            <div className='lg:col-span-2 col-span-1 bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>$7,890</p>
                    <p className='text-gray-600'>Total</p>
                </div>
                <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+12%</span>
                </div>
            </div>
            <div className='bg-white flex justify-between w-full border p-4 rounded-lg'>
                <div className='flex flex-col w-full pb-4'>
                    <p className='text-2xl font-bold'>300</p>
                    <p className='text-gray-600'>Customers</p>
                </div>
                <div className='bg-green-200 flex justify-center items-center p-2 rounded-lg'>
                    <span className='text-green-700 text-lg'>+8%</span>
                </div>
            </div>
        </div>
    )
}

export default TopCards