import React from 'react'
import Tags from './Tags.jsx'

const TagsCollection = () => {
  return (
    
    <div className='flex w-full overflow-y-scroll pl-1 pr-1  scrollbar-hide'>
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
