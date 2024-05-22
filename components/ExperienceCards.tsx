import React from 'react'
import{motion} from 'framer-motion';
import { WExperience } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  experience:WExperience
}
// https://drive.google.com/file/d/1xSQxmP9Ny7Tty3lIHSx5axQGIJmvZBFP/view?usp=sharing
export default function ExperienceCards({ experience }: Props) {
  return (
    <article className='flex flex-col  snap-center bg-[#292929] rounded-lg items-center space-y-4 flex-shrink-0 mt-10 w-[500px] md:w-[600px] xl:w-[900px] p-10 opacity-60 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img 
         initial={{
          y:-100,
          opacity:0
         }}
         whileInView={{
          y:0,
          opacity:1,

         }}
         transition={{
          duration:1.5,

         }}
         whileHover={{
          opacity:0.7,
         }}
         viewport={{once:true}}
          className='w-28 h-28 object-cover object-center rounded-full xl:h-[200px] xl:w-[200px]'
          src={urlFor(experience.companyImage).url()} alt="" />
          <div className='px-0 md:px-10'>
            <h4 className='text-2xl font-light'>{experience.jobTitle}</h4>
            <div className='flex space-x-2 my-1'>
              {/* tech used */}
              {experience.technologies.map(technology=>(
                <img 
                  key={technology._id}
                  className='h-10 w-10 rounded-full object-cover'
                  src={urlFor(technology.image).url()} alt="" />
              ))}
              
            </div>
            <p className='uppercase py-3 text-gray-400'>
              {new Date(experience.dateStarted).toDateString()}-{" "}
              {experience.isCurrentlyWorkingHere? "present": new Date(experience.dateEnded).toDateString()}
            </p>
            <ul className=' list-disc space-y-2 ml-5 overflow-y-scroll scrollbar-thin scrollbar-track-black scrollbar-thumb-[#F7AB0A]/70'>
              {experience.points.map((point,i)=>(
                
                <li key={i}>{point}</li>

              ))}
              
            </ul>
          </div>
    </article>
  )
}