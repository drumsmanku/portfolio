import React from 'react'
import{motion} from 'framer-motion';
import { PageInfo } from '../typings';
import { urlFor } from '../sanity';


type Props = {
  pageInfo:PageInfo
}

export default function About({ pageInfo }: Props) {
  return (
    <motion.div
      initial={{opacity:0,}}
      whileInView={{opacity:1,}}
      transition={{duration:1.5}}
    className=' flex flex-col relative h-screen text-center md:text-left md:flex-row  mx-w-4xl px-10 justify-evenly mx-auto items-center'>
      <div>
        
      </div>
      <h3 className=' absolute top-20 xl:top-14 uppercase tracking-[20px] text-gray-400 text-2xl pb-30'>About</h3>

      <motion.img
       initial={{
            x:-200,
            opacity:0
        }}
        transition={{duration:1.2}}
        whileInView={{
          x:0,
          opacity:1
        }}
        viewport={{once: true}}
        src = {urlFor(pageInfo?.profilePic).url()}
        className=' -mb-30 md:mb-0 flex-shrink-0 rounded-full h-52 w-52 mt-12 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[350px] xl:h-[550px]'/>

        <div className=' space-y-10 px-0 md:px-10 '> 
          <h4 className=' text-4xl font-semibold underline decoration-[#dae160]/50  '>
          Something to know about me

          </h4>
          <p className='text-base'>{pageInfo?.backgroundInformation}</p>
        </div>
         
    </motion.div>
     
  )
}