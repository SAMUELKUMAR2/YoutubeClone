import React from 'react'
import './YouTube.css'
import SearchBar from './Right-collections/SearchBar.jsx'
import Containers from './Containers/Containers.jsx'

function Youtube() {
  return (<>
  <div className=''>
    <div className='m-2 text-2xl  w-full h-screen grid grid-cols-5 gap-4 '>
      {/* <h1 className=''>youtube page</h1> */}
      <div className='border-4  rounded-2xl  '>
      <Containers />
      </div>
      <div className=' p-3 col-span-4  border-l-2 w-full border-black border-opacity-30 '>
     
      <SearchBar  />
      </div>
    
    </div>
    
    </div>
    </>  )
}

export default Youtube
