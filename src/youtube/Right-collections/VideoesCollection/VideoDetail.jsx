import React from 'react'
import VideoCollection from './VideoCollection'


const  VideoDetail = ({ Videoes}) => {
    // console.log({Videoes});
  return (
    <div>
        
        {Videoes.map((Item,idx)=>(
 
 <div key={idx} className='   m-2  flex   '>
  
   {Item.id.videoId && <VideoCollection video={Item}  />}
   
  
   </div>
 
 ))}
    </div>
  )
}

export default VideoDetail
