import { Heart } from 'lucide-react'
import React from 'react'

export default function PostList() {
  return (
    <div>
        <div className='w-130 bg-[#f1efefc0] rounded-xl flex  flex-col justify-center items-center gap-5 py-10 my-6'>
            <div  className='w-110 h-auto bg-white rounded-sm'>
                <p className='font-normal text-2xl mt-3 ml-3'>Tiêu đề 1</p>
                <p className='opacity-75 m-3'>Nội dung 1</p>
                <hr />
                <div className='flex justify-between items-center mx-3 my-4'>
                    <Heart className='text-red-500 '/>
                    <button className=' w-10 h-10 bg-[#808080] rounded-full text-white'>S</button>
                </div>
            </div>
            <div  className='w-110 h-auto bg-white rounded-sm'>
                <p className='font-normal text-2xl mt-3 ml-3'>Tiêu đề 1</p>
                <p className='opacity-75 m-3'>Nội dung 2</p>
                <hr />
                <div className='flex justify-between items-center mx-3 my-4'>
                    <Heart className='text-red-500 '/>
                    <button className=' w-10 h-10 bg-[#808080] rounded-full text-white'>S</button>
                </div>
            </div>
            <div  className='w-110 h-auto bg-white rounded-sm'>
                <p className='font-normal text-2xl mt-3 ml-3'>Tiêu đề 1</p>
                <p className='opacity-75 m-3'>Nội dung 3</p>
                <hr />
                <div className='flex justify-between items-center mx-3 my-4'>
                    <Heart className='text-red-500 '/>
                    <button className=' w-10 h-10 bg-[#808080] rounded-full text-white'>S</button>
                </div>
            </div>
        </div>
    </div>
  )
}
