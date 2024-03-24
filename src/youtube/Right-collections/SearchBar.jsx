import React from 'react'
import search from '../icons/search.png'
// import search from './icons/search.png'
import mic from '../icons/mic.png'
import upload from '../icons/upload.png'
import notification from '../icons/notification.png'
import circle from '../icons/circle.png'
import TagsCollection from '../Tags/TagsCollection.jsx'
import CardCollection from './VideoesCollection/CardCollection.jsx'

const SearchBar = () => {
    return (
        <>
           
            {/* <div className=''>
                <TagsCollection />
            </div> */}
            {/* CardCollections */}
            <div >
              <CardCollection />
            </div>
        </>
    )
}

export default SearchBar
