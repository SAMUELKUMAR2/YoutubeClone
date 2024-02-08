import React from 'react'
import youtubelogo from '../icons/youtubelogo.png'
import menu from '../icons/menu.png'
import Menu_Items from './Menu_Items'
const Containers = () => {
  return (
    <>
      <div className='flex'>
        <div className=''>
          {/* menu */}
          <img className=' ml-2 w-8 h-8 ' src={menu} alt="menu" />
        </div>
        {/* logo,youtube */}
        <div className='pl-4 flex justify-center '>
          <img className=' w-10 h-9' src={youtubelogo} alt="logo" />
          <h1 className='font-bold tracking-tighter'>YouTube</h1>
        </div>
      </div>

      {/* Menu Items */}
      <div>
        <Menu_Items />
      </div>
    </>
  )
}

export default Containers
