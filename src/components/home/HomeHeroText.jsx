import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font[font1] overflow-hidden  text-center'>
        <div className='text-[9.5vw] font-medium uppercase leading-[8vw] flex items-center justify-center'>The spark for</div>
        <div className='text-[9.5vw] font-medium uppercase leading-[8vw] flex items-center justify-center'>all <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden'><Video /></div> things</div>
        <div className='text-[9.5vw] font-medium uppercase leading-[8vw] flex items-center justify-center'>creative</div>

        <div className='flex justify-end p-4 pt-40'>
          <div className='h-[10vw]  w-[19vw] flex '>
          <p className='text-[0.875rem]'>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in</p>
        </div>
        </div>
    </div>
  )
}

export default HomeHeroText