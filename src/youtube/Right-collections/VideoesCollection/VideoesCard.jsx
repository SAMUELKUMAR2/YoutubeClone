import React from 'react'
import VideoCollection from './VideoCollection.jsx';
import ChannelCollection from './ChannelCollection.jsx';

import { BrowserRouter,Router } from 'react-router-dom';
const VideoesCards = ({videoes}) => {
    // console.log(videoes);
  return(<>
  
   
  <div className=''>
 {videoes.map((Item,idx)=>(
 
  <div key={idx} className='   m-2  flex  flex-col  '>
   
    {Item.id.videoId && <VideoCollection video={Item} />}
    {Item.id.channelId && <ChannelCollection ChannelDetails={Item}/>}
   
  </div>
 
 ))}
  </div>
   
    </>
  )
}

export default VideoesCards