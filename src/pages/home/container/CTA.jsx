import React from 'react'
import { images } from '../../../constants'

export default function CTA() {
  return (
    <>
        <svg
        className="w-full h-auto max-h-40 translate-y-[1px]"
        preserveAspectRatio="none"
        viewBox="0 0 2160 263"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          id="Wave"
          fillRule="evenodd"
          clipRule="evenodd"
          d="M2160 262.5H0V0C360 80 720 120 1080 120C1440 120 1800 80 2160 0V262.5Z"
          fill="#0D2436"
        />
      </svg>

      <section className='relative bg-dark-hard px-5'>
        <div className='container grid grid-cols-12 mx-auto py-10 md:pb-20 lg:place-items-center'>
            <div className='col-span-12 lg:col-span-6'>
                <h2 className='text-white font-roboto font-bold text-2xl md:text-4xl md:text-center md:leading-normal lg:text-left'>
                    Get our stories delivered From us to your inbox weekly.
                </h2>
                <div className='w-full mt-12 max-w-[484px] space-y-3 md:space-y-0 mx-auto md:flex md:items-center md:space-x-2 lg:mx-0'>
                    <input 
                        type='text'
                        className='px-4 py-3 rounded-lg w-full placeholder:text-dark-light'
                        placeholder='Your Email'
                    />
                    <button className='text-white bg-primary rounded-lg w-full px-4 py-3 font-bold md:w-fit md:whitespace-nowrap'>
                        Get Started
                    </button>
                </div>
                <p className='text-dark-light text-sm leading-7 mt-6 md:text-center md:text-base lg:text-left'>
                    <span className='font-bold italic text-[#b3bac5] md:not-italic md:font-normal md:text-dark-light'>
                        Get a response tomorrow if you submit by 9pm today. If we received after 9pm will get a reponse the following day.
                    </span>
                </p>
            </div>
            <div className='col-span-12 hidden md:block lg:col-span-6 lg:order-last mb-[70px] md:order-first'>
                <div className='w-3/4 mx-auto relative'>
                    <div className='w-1/2 h-1/2 bg-[#fc5a5a] absolute rounded-lg top-[10%] -right-[8%]' />
                    <div className='w-1/2 h-1/2 bg-white rounded-lg absolute opacity-[.06] -bottom-[10%] -left-[8%]' />
                    <div className='bg-white w-full z-[1] rounded-xl p-3 relative'>
                        <img 
                            src={images.CTAImage}
                            alt=''
                            className='w-full object-cover object-center h-auto md:h-52 lg:h-48 xl:h-60'
                        />
                        <div className='p-5'>
                            <h2 className='font-roboto font-bold text-xl text-dark-soft md:text-2xl lg:text-[28px]'>
                                Future of Work
                            </h2>
                            <p className='text-dark-light mt-3 text-sm md:text-lg'>
                                Majority of peole will work in jobs that don’t exist today.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}
