import React from 'react'

export default function Exercise05() {
  return (
    <div className='bg-blue-100 rounded-lg w-100 h-50 p-4'>
        <div className='relative bg-blue-200 w-90 h-40 p-4'>
            <p>Relative parent</p>
            <div className="absolute bottom-0 left-0 bg-blue-400 rounded-md p-2">
                <p>Absolute child</p>
            </div>
        </div>
    </div>
  )
}
