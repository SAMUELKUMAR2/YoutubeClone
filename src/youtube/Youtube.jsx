import React from 'react'
import './Youtube.css'
import SearchBar from './Right-collections/SearchBar.jsx'
import Containers from './Containers/Containers.jsx'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ChannelDetail from './Right-collections/VideoesCollection/ChannelDetail.jsx'
import VideoDetail from './Right-collections/VideoesCollection/VideoDetail.jsx'


function Youtube() {


  return (<>
  
  <div className='flex flex-col-reverse'>
    <div className='m-2 text-2xl  w-full h-screen grid grid-cols-5 gap-4 '>
      <div className='fixed rounded-2xl max-lg::invisible'>
      <Containers />
      </div>
      {/* <h1 className=''>youtube page</h1> */}
     <div className='col-span-1'>

     </div>
      <div className=' p-3 col-span-4 max-lg:col-span-5 border-l-2 w-full border-black border-opacity-30 '>
      <BrowserRouter>
     <Routes>
      <Route path='/Youtube-Clone' exact element={<SearchBar  />}/>
      <Route path='/Youtube-Clone/channel/:id'  element={<ChannelDetail  />} />
      <Route path='/Youtube-Clone/video:id'  element={<VideoDetail/>}/>
      {/* 
      <Route path='/Youtube-Clone/Search:Searchterm' exact element={<SearchFeed  />}/> */}
      </Routes>
      </BrowserRouter>
      </div>
    
    </div>
    
    </div>
    
    </>  )
}

export default Youtube
