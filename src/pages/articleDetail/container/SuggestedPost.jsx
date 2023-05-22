import React from 'react'
import { Link } from 'react-router-dom'

export default function SuggestedPost({ className, header, posts, tags = [] }) {
  return (
    <div className={`w-full shadow-[rgba(7,_65,_210,_0.1)_0px_9px_30px rounded-lg p-4 ${className}`}>
        <h2 className='font-roboto font-medium text-dark-hard'>
            {header}
        </h2>
        <div>
            {posts.map((item) => (
                <div className='flex space-x-3 flex-nowrap items-center' key={item._id}>
                  <img src={item.image} alt='laptop' className='aspect-square object-cover rounded-lg w-1/5' />
                  <div className='text-sm font-roboto text-dark-hard font-medium'>
                    <h3>{item.title}</h3>
                    <span className='text-xs opacity-60'>
                      {new Date(item.createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                      })}
                    </span>
                  </div>
                </div>
            ))}
        </div>
        <h2 className='flex flex-wrap gap-x-2 gap-y-2 mt-4'>Tags</h2>
        <div>
          {tags.map((item) => (
            <Link className=''>{item}</Link>
          ))}
        </div>
    </div>
  )
}
