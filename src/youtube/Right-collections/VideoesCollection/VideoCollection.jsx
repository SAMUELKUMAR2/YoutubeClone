import React from 'react'
import { Link } from "react-router-dom";
const VideoCollection = ({ video: { id: { videoId }, snippet }}) => {
  // console.log(videoId);

  return (<>
   
<Link to={videoId?`/Youtube-Clone/video/${videoId}`:videoId}>
    <div className='grid grid-cols-3  max-lg:block'>

            <div className=' col-span-1   gap-2 border overflow-hidden rounded-2xl hover:rounded-none ' >
              <img className='  ' src={snippet?.thumbnails?.high?.url} alt={snippet?.title} />
            </div>

            <div className='col-span-2  p-4 flex flex-col '><h5>{snippet?.title}</h5>
              <div className='flex mt-3 '><img className='w-5 h-5 rounded-full overflow-hidden mr-2 ' src={snippet?.thumbnails?.high?.url} alt="a" />
                <h6 className=' text-sm font-semibold'>{snippet?.channelTitle}</h6>

              </div>
              <p className='truncate pr-4 overflow-hidden font-thin text-base mt-2'>{snippet?.
                description}</p>
            </div>
    </div>
            </Link>
  </>
  )
}

export default VideoCollection