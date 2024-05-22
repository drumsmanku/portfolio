import React from 'react'
import{motion} from 'framer-motion';
import { Skill } from '../typings';
import { urlFor } from '../sanity';
type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  return (
    <div className='group relative flex cursor-pointer'>
      <motion.img
        initial={{
            x:directionLeft? -200:200,
            opacity:0
         }}
        whileInView={{
          x:0,
          opacity:1,
         }}
        transition={{
          duration:1
         }}
        viewport={{
          once:true
         }}
         className='h-14 w-14 rounded-full object-contain border border-gray-500 md:w-16 md:h-16 filter  group-hover:grayscale transition duration-300 ease-in-out' 
         src={urlFor(skill?.image).url()} alt="nth" />
         
        
        <div className='absolute opacity-0 group-hover:opacity-80 tansition duration-300 ease-in-out group-hover:bg-white h-14 w-14 md:w-16 md:h-16 rounded-full z-0'>
         
          <div className='flex h-full items-center justify-center'>
            
            <p className='text-xl md:text-2xl font-bold text-black opacity-100'>{skill.progress}%</p>
          </div>
        </div>
    </div>
  );
}
export default Skill;