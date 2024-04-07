import React, { useState,useEffect } from 'react'

import { FetchData } from '../../../API/FetchData'
import { useParams } from 'react-router-dom'



const  VideoDetail = () => {
  const {id} = useParams();
  const [VideoDetail, setvideoesDetails] = useState(null);
  console.log(VideoDetail);
  useEffect(() => {
    FetchData(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      setvideoesDetails(data.items[0])
    })
      
  }, [id])
  return (
    
    <div>
    <div className=' col-span-1   gap-2 border overflow-hidden rounded-2xl hover:rounded-none ' >
              {/* <img className='  ' src={snippet?.thumbnails?.high?.url} alt={snippet?.title} /> */}
            </div>
     
    </div>
  )
}

export default VideoDetail
