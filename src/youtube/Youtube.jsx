import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './Youtube.css'

import Searchbar from './NavBar/Searchbar.jsx'
import SideBar from './SideBar/SideBar.jsx'
import CardCollection from './Right-collections/CardCollection/CardCollection.jsx'
import ChannelDetail from './Right-collections/VideoesCollection/ChannelDetail.jsx'
import VideoDetail from './Right-collections/VideoesCollection/VideoDetail.jsx'
import SearchFeed from './Right-collections/SearchFeed/SearchFeed.jsx'

function Youtube() {


  return (<>
  
  <div className='flex '>
    <div className=' text-2xl  w-full  grid grid-cols-5 gap-4 '>
  
      <div className='fixed col-span-1 rounded-2xl max-lg::invisible'>
      <SideBar />
      </div>
      {/* <h1 className=''>youtube page</h1> */}
     <div className='col-span-1'>

     </div>
      <div className=' pl-3 col-span-4 max-lg:col-span-5 border-l-2 w-full border-black border-opacity-30 '>
      <BrowserRouter>
      <Searchbar />
   

     <Routes>
      <Route path='/Youtube-Clone' exact element={<CardCollection  />}/>
      <Route path='/Youtube-Clone/channel/:id'  element={<ChannelDetail  />} />
      <Route path='/Youtube-Clone/video/:id'  element={<VideoDetail/>}/>
      
      <Route path='/Youtube-Clone/Search/:SearchTerm' element={<SearchFeed  />}/>
      </Routes>
      </BrowserRouter>
      </div>
    
    </div>
    
    </div>
    
    </>  )
}

export default Youtube
