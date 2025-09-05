import { X } from 'lucide-react'
import React from 'react'

export default function AddPost() {
  return (
    <div className='w-100 h-auto bg-white rounded-xl'>
        <div>
            <div>
                <p className='text-xl font-normal '>Bài viết của bạn</p>
                <X />
            </div>
            <hr />
            <div>
                <label htmlFor=""> Tiêu đề <span>*</span></label>
                <input type="text" />
                <label htmlFor="">Nội dung<span>*</span></label>
                <input type="text" />
            </div>
            <hr />
            <div>
                <button>Đăng</button>
                <button>Hủy</button>
            </div>
        </div>
    </div>
  )
}
