import React, { createContext } from 'react'
import Tags from './Tags.jsx'



const TagsCollection = () => {
  return (
    
    <div className='flex w-[98%] overflow-y-scroll pl-2 pr-2   '>
     
   <Tags name="All" />
   <Tags name="JavaScript" />
   <Tags name="Music" />
   <Tags name="Kids" />
   <Tags name="Dance" />
   <Tags name="News" />
   <Tags name="algorithm" />
   <Tags name ="Java" />
   <Tags name="html" />
   <Tags name="python" />
   
    </div>
  )
}

export default TagsCollection
