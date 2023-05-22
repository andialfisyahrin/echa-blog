import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { images } from '../../../constants'

export default function Hero() {
  return (
    <section className='container mx-auto flex flex-col px-5 py-5 lg:flex-row'>
        <div className='mt-10 lg:w-1/2'>
            <h1 className='font-bold text-3xl md:text-5xl lg:text-4xl xl:text-5xl text-center lg:text-left text-dark-soft font-roboto lg:max-w-[540px]'>Read the most interesting articles</h1>
            <p className='text-dark-light mt-4 text-center md:text-xl lg:text-base xl:text-xl lg:text-left lg:leading-9'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua
            </p>
            <div className='flex flex-col gap-y-2.5 mt-10 lg:mt-6 xl:mt-10 relative'>
                <div className='relative lg:w-1/2'>
                    <FiSearch className='absolute left-3 top-1/2 w-6 h-6 text-[#959ead] -translate-y-1/2' />
                    <input 
                        type='text' 
                        className='placeholder:font-bold font-semibold text-dark-soft placeholder:text-[#959ead] rounded-lg pl-12 pr-3 py-3 focus:outline-none shadow-[rgba(13,_38,_76,_0.19)_0px_9px_20px] w-full md:py-4' 
                        placeholder='Search Article' />
                </div>
                <button className='w-full bg-primary text-white font-semibold rounded-lg px-5 py-3 md:absolute md:right-2 md:top-1/2 md:-translate-y-1/2 md:w-fit md:py-2'>
                    Search
                </button>
            </div>
            <div className='flex mt-4 flex-col lg:flex-row lg:items-start lg:flex-nowrap lg:gap-x-4 lg:mt-7'>
                <span className='text-dark-light font-semibold italic mt-2 lg:mt-4 lg:text-sm xl:text-base'>
                    Popular Tags:
                </span>
                <ul className='flex flex-wrap gap-x-2.5 mt-3 gap-y-2.5 lg:text-sm xl:text-base'>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>
                        Design
                    </li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>
                        User Experience
                    </li>
                    <li className='rounded-lg bg-primary bg-opacity-10 px-3 py-1.5 text-primary font-semibold'>
                        User Interfaces
                    </li>
                </ul>
            </div>
        </div>
        <div className='hidden lg:block lg:1/2'>
            <img 
                src={images.HeroImage}
                alt='users are reading articles'
                className='w-full'
            />
        </div>
    </section>
  )
}
