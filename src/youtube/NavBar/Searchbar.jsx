import React, { useState } from 'react'
import {useNavigate } from 'react-router-dom'

import search from '../icons/search.png'
import mic from '../icons/mic.png'
import upload from '../icons/upload.png'
import notification from '../icons/notification.png'
import circle from '../icons/circle.png'
import TagsCollection from '../Tags/TagsCollection'

const Searchbar = () => {

    const navigate = useNavigate();
    const [SearchTerm, SetSearchTerm] = useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(e.target.value);
        if(SearchTerm){
            navigate(`/Youtube-Clone/Search/${SearchTerm}`);
            SetSearchTerm('');
        }
    }
  return (
    <div>
   <div className="searchbar flex justify-between ">
                {/* search input box, search button */}
               <form onSubmit={handleSubmit}>
                <div className=' m-1 flex ml-20'  onSubmit={handleSubmit}>
                    <input value={SearchTerm}

                     onChange={(e)=>{SetSearchTerm(e.target.value)}}
                    className='rounded-l-full w-80 pr-3 pl-3 border-2 border-opacity-30 border-black' placeholder='search'>

                    </input>
                    <div className='flex border-r-2 border-t-2 border-b-2 border-opacity-30 border-black rounded-r-full bg-white'>

                        <button onClick={handleSubmit} className='search justify-center p-2  '>
                            <img src={search} alt="image" />
                        </button>
                    </div>



                    
                    {/* mic */}
                    <div className='mic m-1 ml-3 p-2 flex justify-center bg-blue-200 rounded-full w-9 h-9'>
                        <img src={mic} alt="mic" />
                    </div>
                </div>
            </form>
               
                {/* uploader ,notification, email */}
                <div className='three-Item mr-8 flex justify-center justify-items-center gap-5'>
                    {/* uploader */}
                    <div className='uploader flex justify-center'>
                        <button className=''>
                            <img className=' w-8 h-8 ' src={upload} alt='upload'></img>
                        </button>
                    </div>
                    {/* notification */}
                    <div className='notification  flex justify-center '>
                        <button >
                            <img  className='w-8 h-8' src={notification}>
                            </img>
                        </button>
                    </div>
                    {/* Search */}
                    <div className='email  flex justify-center'>
                        <button>
                            <img className='w-8 h-8'src={circle} alt="email" />
                        </button>
                    </div>
                </div>
            </div> 
{/* Tags */}

<div className=''>
                <TagsCollection />
            </div>
    </div>
  )
}

export default Searchbar