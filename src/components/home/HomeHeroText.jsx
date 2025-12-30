import React from 'react'
import Video from './Video'

const HomeHeroText = () => {
  return (
    <div className='font[font1] mt-70 lg:mt-0 overflow-hidden  text-center text-white' >
      <div className='lg:text-[9.5vw] text-[12vw] font-medium uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>The spark for</div>
      <div className='lg:text-[9.5vw] text-[12vw] font-medium uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>all <div className='h-[7vw] w-[15vw] rounded-full overflow-hidden'><Video /></div> things</div>
      <div className='lg:text-[9.5vw] text-[12vw] font-medium uppercase lg:leading-[8vw] leading-[10vw] flex items-center justify-center'>creative</div>

      <div className='flex justify-end p-4 lg:pt-15 pt-20 '>
        <div className='lg:h-[10vw] lg:w-[19vw] h-[45vw] w-[70vw] flex '>
          <p className='lg:text-[0.875rem] text-[0.975rem] text-white leading-tight lg:leading-relaxed '>
            &nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; K72 is an agency that builds brands from every angle. Today, tomorrow and years from now. We think the best sparks fly when comfort zones get left behind and friction infuses our strategies, brands and communications with real feeling. We’re transparent, honest and say what we mean, and when we believe in something, we’re all in</p>
        </div>
      </div>
    </div>
  )
}

export default HomeHeroText