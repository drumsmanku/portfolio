import React from 'react'
import{motion} from 'framer-motion';
import { Projects } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  projects:Projects[];
}

export default function Project({ projects }: Props) {
  
  return (
    <motion.div
      initial={{opacity:0,}}
      whileInView={{opacity:1}}
      transition={{duration:1.5}} 
      className='h-screen relative flex flex-col overflow-hidden text-center items-center justify-evenly md:flex-row mx-auto max-w-full z-0 '>
      <motion.h3 
        initial={{opacity:0}}
        whileInView={{opacity:1}}
        transition={{duration:1.5}}
        viewport={{once:true}}
        className='absolute top-24 uppercase tracking-[18px] text-gray-400 text-2xl '>Projects</motion.h3>

      <div className='relative flex overflow-x-scroll w-full snap-x snap-mandatory space-x-5 overflow-y-hidden   z-20  scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
        {projects?.map((project,i)=>(
          <div key={project._id} className='w-screen flex-shrink-0 snap-center  flex flex-col space-y-5 items-center justify-center p-20 h-screen md:p-44'>
            <motion.img 
              initial={{y:-300, opacity:0}}
              whileInView={{y:0, opacity:1}}
              transition={{duration:1.2}}
              viewport={{once:true}}
              
              className=' rounded-lg object-contain md:h-64 md:w-95' src={urlFor(project?.image).url()} alt="" />

            <div className='space-y-10 px-0 md:px-10 max-w-5xl '>
              <h4 className='text-center font-semibold text-xl md:text-2xl'>
                <span className='underline decoration-[#33ecc7]/60 '>Project-{i+1}</span>  : {project?.title}
              </h4>
               <div className='flex items-center justify-center space-x-5'>
               {project?.technologies.map((technology)=>(
                 <img className='h-10 w-10 object-contain' key={technology?._id} src={urlFor(technology?.image).url()} alt="" />
                 ))}
              </div>
              <p className='text-lg text-center md:text-left'>{project?.summary}</p>
            </div>
          </div>
          
          
        ))}
      </div>
      <div className='absolute w-full top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-6'/>
      <div className='absolute w-full top-[50%] bg-[#455de5]/10 left-0 h-[400px] skew-y-12'/>
    </motion.div>
  )
}