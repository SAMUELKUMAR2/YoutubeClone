import React from 'react'
import VideoCollection from './VideoCollection.jsx';
import ChannelCollection from './ChannelCollection.jsx';

import TagsCollection from '../../Tags/TagsCollection.jsx';
const VideoesCards = ({videoes,display}) => {

  const handleScroll = () => {
    window.scrollTo({

      top: 0,
      scrollTo:top,
      behavior: "smooth"
    })
  }
  
    // console.log(videoes);
  return(<>
  
   
  <div className=' w-full h-full '>
  <div className={`mt-5 ${display}`}>
                <TagsCollection  />
            </div>
 <div className='border-2 mt-3 border-green-700 '>

 {videoes.map((Item,idx)=>(
 
 <div key={idx} className='   m-2  flex  flex-col  '>
  
   {Item.id.videoId && <VideoCollection video={Item} display ={display} />}
   {Item.id.channelId && <ChannelCollection ChannelDetails={Item}/>}
  
 </div>

))}

      {/* Scroll Button */}
      <button onClick={handleScroll} id='scrollToTop'
       className='cursor-pointer outline-none fixed bottom-6 right-[20px] opacity-1'>^</button>
 </div>
  </div>
   
    </>
  )
}

export default VideoesCards