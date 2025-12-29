import React from 'react'
import { Link } from 'react-router-dom'
import LiveClock from './LiveClock'

const HomeBottomText = () => {
  return (
  <div className='font-[font2] flex items-center justify-center gap-2 '>
  
    <div className='bottom-0 left-0 fixed flex gap-1'>
     <div className='p-2'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-10">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
</svg>
     </div>

   <div className='flex pt-4 text-2xl font-[font1]'>
     <h6 >MONTREAL_</h6>
    <LiveClock />
    </div>
   </div>
   
        <div className='uppercase hover:text-[#D2FD50] hover:border-[#D2FD50] border-3 border-white leading-[6vw] pt-5 rounded-full px-10  items-center'>
            <Link className='text-[5.5vw] mt-5 ' to={'/projects'}>Work</Link>
        </div>
       <div className='uppercase hover:text-[#D2FD50] hover:border-[#D2FD50] border-3  border-white leading-[6vw] pt-5 rounded-full px-10  items-center'>
         <Link className='text-[5.5vw] mt-5' to={'/agnece'}>Agence</Link>
         </div>
    </div>
  )
}

export default HomeBottomText 