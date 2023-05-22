import React from 'react'

export default function SuggestedPost({ className, header, posts = [] }) {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px rounded-lg p-4 ${className}`}>
        <h2 className='font-roboto font-medium text-dark-hard'>
            {header}
        </h2>
        <div>
            {posts.map((item) => (
                <div className='' key={item._id}>

                </div>
            ))}
        </div>
    </div>
  )
}
