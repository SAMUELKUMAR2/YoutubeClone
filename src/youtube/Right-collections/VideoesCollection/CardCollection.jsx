import React, { useEffect, useState } from 'react'
import VideoesCards from './VideoesCard.jsx'
import Cards from './Cards'
import { FetchData } from '../../../API/FetchData.jsx'


const CardCollection = () => {
  const [videoes, setvideoes] = useState([]);
  const [SelectCategory, SetselectedCategory] = useState('jen gamer');


  // console.log(FetchData(`search?part=snippet&q=${SelectCategory}`));

  const handleScroll = () => {
    window.scrollTo({

      top: 0,
      behavior: "smooth"
    })
  }
  useEffect(() => {
    FetchData(`search?part=snippet&q=${SelectCategory}`)
      .then((data) => {
        setvideoes(data.items);
        // console.log(data.items );

      })
  }, [SelectCategory])
  return (


    <div className='w-full h-screen   '>
      <h5 className='font-bold flex '>{SelectCategory}</h5>
      <VideoesCards videoes={videoes} />

      {/* Scroll Button */}
      <button onClick={handleScroll} id='scrollToTop' className='cursor-pointer outline-none fixed bottom-4 right-[20px] opacity-1'>^</button>
      {/* <Cards videoes={videoes}/> */}

      {/* <Cards  title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/0e3GPea1Tyg/mqdefault_6s.webp?du=3000&sqp=CICQpa4G&rs=AOn4CLArWUbGCxGheDgkKWRw3gUToVN0Jg" />
     <Cards  title="Last To Leave Circle Wins $500,000" view="402M views" time="2 years ago" image ="https://i.ytimg.com/an_webp/tnTPaLOaHz8/mqdefault_6s.webp?du=3000&sqp=CJiflK4G&rs=AOn4CLCVhUbrgI3YfhRYsMeuqKoHoNxbMw"
     
     />
     <Cards title="$1 vs $5000 plane Ticket!" view="337M views" time="10 months ago" image ="https://i.ytimg.com/an_webp/7ESeQBeikKs/mqdefault_6s.webp?du=3000&sqp=CNuMlK4G&rs=AOn4CLAc0plhYbjJdPrjfAnLpw9fuiat9w"/>
     <Cards   title="Last To Leave Circle Wins $500,000" view="402M views" time="2 years ago" image ="https://i.ytimg.com/an_webp/K_CbgLpvH9E/mqdefault_6s.webp?du=3000&sqp=CM-MlK4G&rs=AOn4CLCSW9e26A8R9uqPglu7feDdmbMSpA"/>
     <Cards title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/iogcY_4xGjo/mqdefault_6s.webp?du=3000&sqp=CJyclK4G&rs=AOn4CLB8UJiXDycIOr-bgYoeagp5igbBTw"/>
     <Cards  title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/FM7Z-Xq8Drc/mqdefault_6s.webp?du=3000&sqp=CK6OlK4G&rs=AOn4CLDxCsjeEg1I2tj950YXAN9tdL1Fyg"/>

     <Cards  title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/9RhWXPcKBI8/mqdefault_6s.webp?du=3000&sqp=COGPlK4G&rs=AOn4CLAAuA7mJsnG4ho4yOAsXd8jU6ozJw" />
     <Cards  title="Last To Leave Circle Wins $500,000" view="402M views" time="2 years ago" image ="https://i.ytimg.com/an_webp/tnTPaLOaHz8/mqdefault_6s.webp?du=3000&sqp=CJiflK4G&rs=AOn4CLCVhUbrgI3YfhRYsMeuqKoHoNxbMw"/>
     <Cards title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/7ESeQBeikKs/mqdefault_6s.webp?du=3000&sqp=CNuMlK4G&rs=AOn4CLAc0plhYbjJdPrjfAnLpw9fuiat9w"/>
     <Cards  title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/K_CbgLpvH9E/mqdefault_6s.webp?du=3000&sqp=CM-MlK4G&rs=AOn4CLCSW9e26A8R9uqPglu7feDdmbMSpA"/>
     <Cards title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/iogcY_4xGjo/mqdefault_6s.webp?du=3000&sqp=CJyclK4G&rs=AOn4CLB8UJiXDycIOr-bgYoeagp5igbBTw"/>
     <Cards  title="$456,000 Squid Game In Real Life!" view="570M views " time="2 years ago" image ="https://i.ytimg.com/an_webp/FM7Z-Xq8Drc/mqdefault_6s.webp?du=3000&sqp=CK6OlK4G&rs=AOn4CLDxCsjeEg1I2tj950YXAN9tdL1Fyg"/>
 */}


    </div>
  )
}

export default CardCollection
