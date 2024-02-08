import React from 'react'

const Cards = ({image,title,view,time}) => {
  return (
    <div className=' w-full h-full  '>
     <div className='m-5 rounded-xl '>
        <img className='rounded-xl hover:rounded-none' src={image} alt="pic" />
        <p className='text-lg'>{title}</p>
        <div className='flex p-1'>
        <h6 className='text-sm'>{view}. </h6> <h6 className='text-sm'>{ time}</h6>
        </div>
     </div>

     
    </div>
  )
}

export default Cards
