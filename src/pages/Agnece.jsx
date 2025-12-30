import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import React, { useRef } from 'react'

const Agnece = () => {

  const imagedivRef=useRef(null)
  const imageRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger)


  const imageArray = [
    'https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/CAMILLE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/MEGGIE_480X640_2-480x640.jpg',
    'https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg',
  ]
console.log(imageArray);

  useGSAP(function(){
    gsap.to(imagedivRef.current,{
      scrollTrigger:{
        trigger:imagedivRef.current,
        start:'top 28%',
        end:'top -100%',
        pinSpacing:true,
        pinReparent:true,
        pinType:'transform',
        anticipatePin:1,
        invalidateOnRefresh:true,
        scrub:1,
        pin:true,
        onUpdate:function(elem){
          let imageIndex
          if(elem.progress<1){
            imageIndex=Math.round(elem.progress * imageArray.length)
          }else{
            imageIndex=imageArray.length -1 
          }
          imageRef.current.src=imageArray[imageIndex]
          
        }
      }
    })
  })

  return (
   <div>
       <div className='section1 py-1'>
      <div ref={imagedivRef} className='lg:h-[20vw] h-[35vw] overflow-hidden lg:w-[15vw] w-[25vw] lg:top-55 -top-7 absolute lg:left-[30vw] left-[30vw] lg:rounded-2xl rounded-xl'>
        <img ref={imageRef} className='h-full object-cover w-full' src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
      </div>
      <div className='relative font-[font2]'>
      <div className=' lg:mt-[55vh] mt-[30vh]'>
        <h1 className='text-[20.5vw] text-center leading-[18vw] uppercase text-black'>SEVEN7Y <br />
          TWO</h1>
      </div>

      <div className='lg:pl-[40%] lg:mt-5 mt-15 text-black p-3'>
        <p className='lg:text-5xl text-xl leading-tight'>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  We’re inquisitive and open-minded, and we make sure creativity crowds out ego from every corner. A brand is a living thing, with values, a personality and a story. If we ignore that, we can achieve short-term success, but not influence that goes the distance. We bring that  perspective to every brand story we help tell.</p>
      </div>
    </div>
    </div>
    <div className="section2 h-screen"></div>
   </div>
  )
}

export default Agnece