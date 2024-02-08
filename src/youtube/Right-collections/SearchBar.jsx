import React from 'react'
import search from '../icons/search.png'
// import search from './icons/search.png'
import mic from '../icons/mic.png'
import upload from '../icons/upload.png'
import notification from '../icons/notification.png'
import circle from '../icons/circle.png'
import TagsCollection from '../Tags/TagsCollection.jsx'
import CardCollection from './CardCollection/CardCollection.jsx'

const SearchBar = () => {
    return (
        <>
            <div className="searchbar flex justify-between ">
                {/* search input box, search button */}
                <div className=' m-1 flex ml-20'>
                    <input className='rounded-l-full w-80 pr-3 pl-3 border-2 border-opacity-30 border-black' placeholder='search'></input>
                    <div className='flex border-r-2 border-t-2 border-b-2 border-opacity-30 border-black rounded-r-full bg-white'>

                        <button className='search justify-center p-2  '>
                            <img src={search} alt="image" />
                        </button>
                    </div>
                    {/* mic */}
                    <div className='mic m-1 ml-3 p-2 flex justify-center bg-blue-200 rounded-full w-9 h-9'>
                        <img src={mic} alt="mic" />
                    </div>

                </div>
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
            <div className=''>
                <TagsCollection />
            </div>
            {/* CardCollections */}
            <div >
              <CardCollection />
            </div>
        </>
    )
}

export default SearchBar
