import { useGSAP } from '@gsap/react'
import React, { useContext, useRef } from 'react'
import gsap from 'gsap'
import { NavBarContext } from '../../../context/NavContext'
import LiveClock from '../home/LiveClock'

const FullScreenNav = () => {

    const fullNavLinkRef = useRef(null)
    const fullScreenRef = useRef(null)
    const privacyLinks = ['Privacy Policy', 'Privacy Notice', 'Ethics Report', 'Consent Choices'];
    const [navOpen, setNavOpen] = useContext(NavBarContext)
    console.log(navOpen);


    function gsapAnimation() {
        const tl = gsap.timeline()
        tl.to('.fullscreennav', {
            display: 'block'
        })
        tl.to('.stairing', {
            delay: 0.2,
            height: '100%',
            stagger: {
                amount: -0.3
            }
        })
        tl.to('.link', {
            opacity: 1,
            rotateX: 0,
            stagger: {
                amount: 0.3
            }
        })
        tl.to('.navlink', {
            opacity: 1
        })
    }


    function gsapAnimationReverse() {
        const tl = gsap.timeline()
        tl.to('.link', {
            opacity: 0,
            rotateX: 90,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.stairing', {
            height: 0,
            stagger: {
                amount: 0.1
            }
        })
        tl.to('.navlink', {
            opacity: 0
        })
        tl.to('.fullscreennav', {
            display: 'none',
        })
    }

    useGSAP(function () {
        if (navOpen) {

            gsapAnimation()
        } else {

            gsapAnimationReverse()

        }
    }, [navOpen])


    return (
        <div ref={fullScreenRef} className='fullscreennav hidden h-screen  overflow-x-hidden w-full z-50  absolute'>
            <div className='h-screen w-full fixed'>
                <div className='h-full flex w-full '>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                    <div className='stairing h-full w-1/5 bg-black'></div>
                </div>
            </div>
            <div ref={fullNavLinkRef} className='relative'>
                <div className='navlinks flex w-full items-start lg:p-2 p-1 justify-between'>
                    <div className=''>
                        <div className=' lg:w-36 w-28 '>
                            <svg className=' w-full' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 103 44">
                                <path fill='white' fill-rule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>
                    <div onClick={() => {
                        setNavOpen(false)
                    }} className='lg:h-32 h-20 w-20 lg:w-32 relative cursor-pointer'>
                        <div className='lg:h-40 h-28 lg:w-1 w-0.5 absolute -rotate-48   origin-top bg-white'></div>
                        <div className='lg:h-40 h-28 lg:w-1  w-0.5 absolute right-0 rotate-48  origin-top bg-white'></div>

                    </div>
                </div>
                <div className='lg:py-6.5 py-17 cursor-pointer'>
                    <div className='link origin-top  relative  border-t border-white'>
                        <h1 className='font-[font2] text-white lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase cursor-alias'>Work</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-16 lg:w-64 w-50 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-16 lg:w-64 w-50 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-16 lg:w-64 w-50 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-16 lg:w-64 w-50 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='link origin-top relative  border-t border-white'>
                        <h1 className='font-[font2] text-white lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>Agency</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='link origin-top relative  border-t border-white'>
                        <h1 className='font-[font2] text-white lg:lg:text-[8.5vw] text-[13vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>Contact</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>

                        </div>
                    </div>
                    <div className='link origin-top relative border-y border-t border-white'>
                        <h1 className='font-[font2] text-white lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>Blog</h1>
                        <div className='moveLink absolute flex top-0 bg-[#D3FD50]'>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2]  lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>
                            <div className='moveX flex text-black  items-center'>
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_640x290.jpg?w=640&h=290&s=ac50a70feaaa2601b3aacad544c6045b" alt="" />
                                <h2 className='whitespace-nowrap font-[font2] lg:text-[8.5vw] text-[13vw] text-center leading-[0.8] pt-6 uppercase'>See EveryThing</h2>
                                <img className='lg:h-23 h-18.5 lg:w-64 w-55 shrink-0 object-cover rounded-full' src="https://k72.ca/images/caseStudies/iA_BRAND/Thumbnail.png?w=640&h=290&s=755b635c06d126151d64017fa1042a7c" alt="" />
                            </div>

                        </div>
                    </div>

                </div>



                <div className='lg:flex justify-between items-center'>

                    <div className='bottom-0 left-0 flex gap-2 opacity-0 lg:opacity-100'>
                        <div className='flex  text-2xl font-[font1]'>
                            <div className='pt-13 pr-3' >
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="white" class="size-10">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418" />
                                </svg>
                            </div>
                            <div className='flex pt-15 text-2xl font-[font1] text-white'>
                                <h6 >MONTREAL_</h6>
                                <LiveClock />
                            </div>
                        </div>
                    </div>



                    <div className='lg:text-[0.85rem] text-[0.65rem] gap-2 lg:pt-15 lg:flex-row flex flex-col items-center justify-center uppercase font-[font1]'>
                        <h4 className='hover:text-[#D3FD50] text-white  cursor-pointer'>Privacy Policy</h4>
                        <h4 className='hover:text-[#D3FD50] text-white cursor-pointer'>Privacy Notice</h4>
                        <h4 className='hover:text-[#D3FD50] text-white cursor-pointer'>Ethics Report</h4>
                        <h4 className='hover:text-[#D3FD50] text-white cursor-pointer'>Constent Choices</h4>
                    </div>


                    <div className='flex items-center justify-center gap-2 font-[font2] lg:text-[2vw] text-[4.5vw] lg:pt-4 pt-2 '>
                        <h1 className='px-6 py-2 border-2 text-white rounded-[999rem] overflow-hidden p-4 hover:text-[#D3FD50] cursor-pointer'>FB</h1>
                        <h1 className='px-6 py-2 border-2 text-white rounded-[999rem] overflow-hidden p-4 hover:text-[#D3FD50] cursor-pointer'>IG</h1>
                        <h1 className='px-6 py-2 border-2 text-white rounded-[999rem] overflow-hidden p-4 hover:text-[#D3FD50] cursor-pointer'>IN</h1>
                        <h1 className='px-6 py-2 border-2 text-white rounded-[999rem] overflow-hidden p-4 hover:text-[#D3FD50] cursor-pointer'>BE</h1>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default FullScreenNav