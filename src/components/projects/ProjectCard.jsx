import React from 'react'

const ProjectCard = (props) => {
    return (
        <div className='w-full h h-[550px] mb-4 flex gap-4 '>
            <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[47px] overflow-hidden '>
                <img className='h-full w-full object-cover' src={props.image1} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 top-0 left-0 flex items-center justify-center  h-full w-full bg-black/10 absolute'>
                    <h2 className='uppercase text-6xl font-[font2] border-4 pt-3 px-4 rounded-full'>View Project</h2>
                </div>
            </div>
            <div className='w-1/2 h-full group relative transition-all rounded-none hover:rounded-[47px] overflow-hidden '>
                <img className='h-full w-full object-cover' src={props.image2} alt="" />
                <div className='opacity-0 transition-all group-hover:opacity-100 top-0 left-0 flex items-center justify-center  h-full w-full bg-black/10 absolute'>
                    <h2 className='uppercase text-6xl font-[font2] border-4 pt-3 px-4 rounded-full'>View Project</h2>
                </div>
            </div>

        </div>

    )
}

export default ProjectCard