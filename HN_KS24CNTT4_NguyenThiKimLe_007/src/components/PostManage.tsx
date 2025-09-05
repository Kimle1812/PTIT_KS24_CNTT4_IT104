import { Select } from 'antd'
import React from 'react'
import PostList from './PostList';
import AddPost from './AddPost';


export default function PostManage() {
    const handleChange = (value: string) => {
        console.log(`selected ${value}`);
    };
  return (
    <div className='bg-gradient-to-r from-blue-500 to-purple-600 flex flex-col items-center'>
        <div>
            <div className="flex justify-center gap-10 p-4">
                <button className='w-30 h-30 rounded-xl bg-[#fffdfd32]'>
                    <p className='font-extrabold text-white'>3</p>
                    <p className='text-white'>Bài viết</p>
                </button>
                <button className='w-30 h-30 rounded-xl bg-[#fffdfd32]'>
                    <p className='font-extrabold text-white'>1</p>
                    <p className='text-white'>Lượt thích</p>
                </button>
            </div>
            <div className='w-90 h-40 bg-[#fffdfd32] rounded-xl flex justify-center text-white font-normal'>
                <div className=' flex flex-col items-center justify-center gap-4'>
                    <div className='flex gap-4 items-center '>
                        <p>Lọc theo: </p>
                        <Select
                            defaultValue="Tất cả bài viết"
                            style={{ width: 200 }}
                            onChange={handleChange}
                            options={[
                            { value: 'jack', label: 'Yêu thích' },
                            
                            ]}
                        />
                    </div>
                    <button className='w-35 h-8 bg-linear-65 from-[#fb8383] to-[#e83d0e] rounded-xl'>Tạo bài viết</button>
                </div>
            </div>
        </div>
        <PostList></PostList>
        <AddPost></AddPost>
    </div>
  )
}