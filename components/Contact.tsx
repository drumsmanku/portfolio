import React from 'react'
import { PhoneIcon, EnvelopeIcon, MapPinIcon} from '@heroicons/react/24/solid';
import { useForm, SubmitHandler } from "react-hook-form";
type Props = {}
type Inputs = {
  name: string,
  email: string,
  subject:string,
  message:string,
};
export default function Contact({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href=`mailto:mayank.tanwar4444@gmail?subject=${formData.subject} &body= Hi, my name is ${formData.name}${formData.message} (${formData.email})`;
  };
  return (
    <div className='h-screen flex flex-col relative items-center justify-evenly text-center md:text-left md:flex-row max-w-7xl mx-auto px-10'>
      <p className='absolute top-20 uppercase tracking-[18px] text-gray-400 text-2xl'>contact</p>
      <div className='flex flex-col space-y-6'>
        <h4 className='text-2xl text-center font-semibold'>
          Here are my contact details
        </h4>
        <div className='space-y-6'>
          <div className='flex item-center space-x-5 justify-center'>
            <PhoneIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-xl '>+9845970485</p>
          </div>

          <div className='flex item-center space-x-5 justify-center'>
            <MapPinIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-xl '>Bangalore</p>
          </div>

          <div className='flex item-center space-x-5 justify-center'>
            <EnvelopeIcon className='text-[#F7AB0A] h-7 w-7 animate-pulse'/>
            <p className='text-xl '>mayank.tanwar4444@gmail.com</p>
          </div>
          <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col space-y-2 w-fit mx-auto'>
            <div className='flex space-x-2'>
              <input {...register('name')} placeholder='Name' className='outline-none bg-slate-400/10 rounded-sm px-4 py-2 border-b border-[#242424] placeholder-gray-500 text-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" />
              <input {...register('email')} placeholder='Email' className='outline-none bg-slate-400/10 rounded-sm px-4 py-2 border-b border-[#242424]  placeholder-gray-500 text-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40'type="email" />
            </div>
             <input {...register('subject')} placeholder='Subject' className='outline-none bg-slate-400/10 rounded-sm px-4 py-2 border-b border-[#242424] placeholder-gray-500 text-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' type="text" />
             <textarea {...register('message')} placeholder='Message' className='outline-none bg-slate-400/10 rounded-sm px-4 py-2 border-b border-[#242424] placeholder-gray-500 text-gray-500 transition-all focus:border-[#F7AB0A]/40 focus:text-[#F7AB0A]/40 hover:border-[#F7AB0A]/40' />
             <button type='submit' className='bg-[#F7AB0A] px-10 py-5 rounded-md text-black font-bold text-lg'>Submit</button>
          </form>

        </div>
      </div>
    </div>
  )
}