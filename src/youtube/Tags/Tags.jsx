import React, { useEffect, useState } from 'react'



const Tags = ({name}) => {


  return (
    <div>
      <button 
      
      className='w-auto h-auto m-4  pl-2 pr-2 flex border-2 border-black border-opacity-35 rounded-md'>
        {name}
        </button>
    </div>
  )
}


export default Tags
