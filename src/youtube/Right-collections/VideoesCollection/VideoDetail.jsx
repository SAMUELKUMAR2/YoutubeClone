import React, { useState,useEffect } from 'react'
import ReactPlayer from 'react-player'
import { FetchData } from '../../../API/FetchData'
import { Link, useParams } from 'react-router-dom'
import like from '../../icons/like.png'
import dislike from '../../icons/dislike.png'
import VideoesCards from './VideoesCard'


const  VideoDetail = () => {
  const {id} = useParams();
  const [VideoDetail, setvideoesDetails] = useState(null);
  const [relatedVideoes,setVideoes] =useState(null);
  // console.log(VideoDetail);
  useEffect(() => {
    FetchData(`videos?part=snippet,statistics&id=${id}`)
    .then((data)=>{
      setvideoesDetails(data.items[0]);

    })
    //related video
    FetchData(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data)=> {
      setVideoes(data.items)
    });
      
  }, [id])

  if(!VideoDetail?.snippet) return "Loading....";
  
  if(!relatedVideoes) return "Loading....";

//destructing data from videoDetail
const {snippet : {title,channelId,channelTitle,thumbnails
:{
  medium:{url}}},statistics:{viewCount,likeCount}}= VideoDetail

  return (
    
    <>
    <div className='grid grid-cols-6 gap-4 h-[84vh] border-2 border-red-900'>
    <div className='w-fit col-span-4  border-2 border-blue-700 '>
      <div className='  shadow-2xl w-fit border-2 border-red-800 '>
      <ReactPlayer  url={`https://www.youtube.com/watch?v=${id}`} 
      
      className="react-player" />
      </div>
      <div className=''>
      <h2 className='font-semibold'>{title}</h2>
      </div>
      <div className='flex justify-between '>
        <div className='flex'>
        <Link to={`/Youtube-Clone/channel/${channelId}`}>
          <div className='flex p-2'>
        <img className='w-8 h-8 rounded-full  mr-2 ' src={url} alt="a" />
                <h6 className=' text-lg font-bold'>{channelTitle}</h6>
                </div>
        </Link>

        <div className='flex  items-center  mt-2 pr-[20px] pb-[30px]'>
             <button className='border pl-2 pr-2 pb-1 rounded-full font-normal text-white bg-gray-950'>
              <h5 className='text-lg'>Subscribe</h5></button>
            </div>
            </div>
    {/* LikeCount */}
    <div className='mt-3  flex gap-3 mr-5'>
     <img className='w-5 h-6' src={like} alt="like" /> <h4 className='text-sm'>{parseInt(likeCount).toLocaleString()}</h4>
     <img className='w-5 h-6 ' src={dislike} alt="like" />
    </div>

      </div>
     
        
    </div>
    
    <div className=' w-[80%]  m-5 mt-0 col-span-2 overflow-scroll'>
    <VideoesCards videoes={relatedVideoes}  display="hidden"/>
    </div>
    </div>
    </>
  )
}

export default VideoDetail
