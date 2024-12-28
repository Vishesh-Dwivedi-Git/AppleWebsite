import React from 'react'
import { appleImg } from '../utils'
import { searchImg,bagImg } from '../utils'
import { navLists } from '../constants'

const Navbar = () => {
  return (
  <header className='w-full py-5 sm:px-10 px-5 flex justify-between items-center'>
    <nav className='flex w-full screen-max-width'>
        <img src={appleImg} alt="Apple" height={50} width={14} />
        <div className='flex flex-1 justify-center max-sm:hidden'>
            {navLists.map((nav)=>(
                <div key={nav} className='text-sm px-5 cursor-pointer text-gray hover:text-white transition-all '>
                    {nav}
                </div>
            ))}
        </div>

        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1">
  <img src={searchImg} height={18} width={18} alt="Search" />
  <img src={bagImg} height={18} width={18} alt="Bag" />
   </div>
    </nav>
  </header>
  )
}

export default Navbar