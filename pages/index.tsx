import type {GetStaticProps } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import About from '../components/About';
import Contact from '../components/Contact';
import Experience from '../components/Experience';
import Header from '../components/Header';
import Hero from '../components/hero';
import Project from '../components/Project';
import Skills from '../components/Skills';
import styles from '../styles/Home.module.css';
import { fetchProjects } from '../utils/fetchProjects';
import { fetchpageInfo } from '../utils/fetchpageInfo';
import { fetchExperience } from '../utils/fetchExperience';
import { fetchSocials } from '../utils/fetchSocials';
import { fetchSkills } from '../utils/fetchSkills';
import{ WExperience,PageInfo,Projects,Skill,Social } from '../typings';

type Props={
  pageInfo:PageInfo;
  experiences:WExperience[];
  skills:Skill[];
  projects:Projects[];
  socials:Social[];


}

const Home = ({pageInfo,experiences, projects, skills, socials}:Props) => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0   scrollbar-track-gray-400/40 scrollbar-thumb-[#F7AB0A] scrollbar-thin'>
      <Head>
        <title>Mayank Portfolio</title>
      </Head>

      <Header socials={socials}/>
      

     
      <section id='hero' className=' snap-start'>
        <Hero pageInfo={ pageInfo }/>
      </section>

      
      <section id='about' className=' snap-center'>
        <About pageInfo={ pageInfo } />
      </section>

      <section id='experience' className=' snap-center'>
        <Experience experiences={ experiences}/>
      </section>

      
      <section id='skills' className=' snap-start'>
        <Skills skills={ skills }/>

      </section>

      <section id='project' className='snap-start'>
        <Project projects={ projects } />
      </section>

      <section id='contact' className='snap-start'>
        <Contact/>
      </section>

      <Link href='#hero'>
        <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-center justify-center'>
            <img 
              className='h-10 w-10 filter grayscale hover:grayscale-0 cursor-pointer rounded-full object-contain' 
              src="https://drive.google.com/uc?export=view&id=1MqQaYooJ3WT0zFxD7-wjARLbpmyuS1uV" alt="" />
          </div>
        </footer>

      </Link>
    </div>
  )
}

export default Home;

export const getStaticProps : GetStaticProps<Props> = async () =>{
  const pageInfo: PageInfo =await fetchpageInfo();
  const experiences:WExperience[] =await fetchExperience();
  const skills:Skill[] =await fetchSkills();
  const projects:Projects[] =await fetchProjects();
  const socials:Social[] =await fetchSocials();

  return{
    props:{
      pageInfo,
      experiences,
      skills,
      projects,
      socials,
    },
    revalidate:10
  };
  
};
