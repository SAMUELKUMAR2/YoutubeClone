import React from 'react'
import VideoCollection from './VideoCollection'


const  VideoDetail = ({ Videoes}) => {
    console.log({Videoes});
  return (
    <div>
        <h2>Video</h2>
        <h3>all video</h3>
        {Videoes.map((Item,idx)=>(
 
 <div key={idx} className='   m-2  flex  flex-col  '>
  
   {Item.id.videoId && <VideoCollection video={Item} />}
   
  
   </div>
 
 ))}
    </div>
  )
}

export default VideoDetail
