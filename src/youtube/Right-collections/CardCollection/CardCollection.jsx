import React, { useEffect, useState } from 'react'
import VideoesCards from '../VideoesCollection/VideoesCard.jsx'

import { FetchData } from '../../../API/FetchData.jsx'


const CardCollection = () => {
  const [videoes, setvideoes] = useState([]);
  const [SelectCategory, SetselectedCategory] = useState('jen gamer');


  // console.log(FetchData(`search?part=snippet&q=${SelectCategory}`));

  const handleScroll = () => {
    window.scrollTo({

      top: 0,
      behavior: "smooth"
    })
  }
  useEffect(() => {
    FetchData(`search?part=snippet&q=${SelectCategory}`)
      .then((data) => {
        setvideoes(data.items);
        // console.log(data.items );

      })
  }, [SelectCategory])
  return (


    <div className='w-full h-screen   '>
      <h5 className='font-bold flex '>{SelectCategory}</h5>
      <VideoesCards videoes={videoes} />

      {/* Scroll Button */}
      <button onClick={handleScroll} id='scrollToTop'
       className='cursor-pointer outline-none fixed bottom-4 right-[20px] opacity-1'>^</button>
     


    </div>
  )
}

export default CardCollection
