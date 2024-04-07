import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
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
    
    <>
    <div className='w-[95vw]'>
      <div className='w-[100%] sticky '>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} 
      controls
      className="react-player" />
      </div>
      <div>
      <h2 className='font-semibold'>{VideoDetail.snippet.title}</h2>
      </div>
      

    </div>
    </>
  )
}

export default VideoDetail
