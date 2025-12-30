import React, { useContext } from 'react'
import ProjectCard from '../components/projects/ProjectCard'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import {ScrollTrigger} from 'gsap/all'
import { NavColorContext } from '../../context/NavContext'

const Projects = () => {


  const projectsImg=[
    {
      image1:'https://k72.ca/images/caseStudies/SHELTON/thumbnailimage_shelton.jpg?w=1280&h=960&s=63d0eaa180cbc02d3ada285ad9ef1479',
      image2: 'https://k72.ca/images/caseStudies/COUP_FUMANT/CF_thumbnail.jpg?w=1280&h=960&s=c119303a20520c4188aa3f592038fd4c',
   
    },{
      image1: 'https://k72.ca/images/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail.jpg?w=1280&h=960&s=650a04dfc31ad85bfc64c0ddccc83f1e',
      image2:'https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b'
    },{
      image1:'https://k72.ca/images/caseStudies/FRUITE/Fruite_thumbnail_bbq.jpg?w=1280&h=960&s=953c1f702bec28d66d07e95bc1261821',
      image2:'https://k72.ca/images/caseStudies/OSM/thumbnailimage_OSM.jpg?w=1280&h=960&s=7a3a71e610146472e6439cc8c765fccd'
    }]

    gsap.registerPlugin(ScrollTrigger)
    useGSAP(function() {
      gsap.from('.hero',{
        height:'100px',
        stagger:{
          amount:0.3,
        },
        scrollTrigger:{
          trigger:'.lol',
          start:'top 100%',
          end:'top -150%',
          scrub:true
        }
      })
    })

  return (
    <div className='lg:p-4 p-2'>
      <div className=' pt-70'>
        <h2 className='font-[font2] lg:text-[12vw] text-7xl text-black uppercase'>work</h2>
      </div>
      <div className='lg:-mt-7 lol'>
        {projectsImg.map(function(elem,idx){
          return  <div key={idx} className='hero w-full  lg:h-[600px] mb-4 flex lg:flex-row flex-col lg:gap-4 gap-2 '>
          <ProjectCard  image1={elem.image1} image2={elem.image2}/>
          </div>
        })}
      </div>
    </div>
  )
}

export default Projects