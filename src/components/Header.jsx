import React, { useState } from 'react'
import { images } from '../constants'
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { MdKeyboardArrowDown } from 'react-icons/md'


const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  { 
    name: "Pages", 
    type: "dropdown", 
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact"}
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "Faq", type: "link", href: "/faq" },
]

const NavItem = ({ item }) => {
  const [dropdown, setDropdown] = useState(false)

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState
    })
  }

  return (
    <li className='relative group'>
      {item.type === "link" ? (
        <>
          <a href='/' className='px-4 py-2'>
            {item.name}
          </a>
          <span className='text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100 '>
          /
        </span>
        </>
      ) : (
        <div className='flex flex-col items-center'>
          <button 
            className='px-4 py-2 flex gap-x-1 items-center' 
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div className={`${dropdown ? "block" : "hidden"} lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}>
            <ul className='bg-dark-soft lg:bg-dark-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden'>
              {item.items.map((page, index) => (
                <li key={index}>
                  <a
                    className='hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft '
                    href={page.href}
                  >
                  {page.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      </li>
  )}

const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false)

  const navVisibilityHandler = () => {
    setNavIsVisible((curState) => {
      return !curState
    })
  }


  return (
    <section className='sticky top-0 left-0 right-0 z-50 bg-white'>
      <header className='container mx-auto px-5 flex justify-between py-4 items-center'>
        <div>
          <img className='w-16' src={images.Logo} alt='' />
        </div>
        <div className='lg:hidden z-50'>
          {navIsVisible ? (
            <AiOutlineClose 
              onClick={navVisibilityHandler} 
              className='w-6 h-6' 
            />
            ) : (
            <AiOutlineMenu 
              onClick={navVisibilityHandler} 
              className='w-6 h-6' 
            /> 
            )}
        </div>
        <div 
        className={`${navIsVisible ? 'right-0' : '-right-full'} transition-all duration-300 mt-[56px] lg:mt-0 flex flex-col bg-dark-hard lg:bg-transparent z-[49]  lg:flex-row w-full lg:w-auto justify-center lg:justify-end fixed top-0 bottom-0 gap-x-9 lg:static items-center`}>
          <ul className='text-white lg:text-dark-soft flex flex-col lg:flex-row gap-x-8 gap-y-5 items-center font-semibold'>
            {navItemsInfo.map((item) => (
              <NavItem key={item.name} item={item} />
            ))}
          </ul>
          <button className='text-base font-bold text-blue-500 border-blue-500 border-2 py-3.5 px-10 rounded-full hover:bg-blue-500 hover:text-white transition-all duration-100'>Sign In</button>
        </div>
      </header>
    </section>
  )
}

export default Header