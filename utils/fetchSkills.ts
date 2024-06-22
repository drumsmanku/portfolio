import { Skill } from '../typings';
import {groq} from 'next-sanity';
import { sanityClient } from '../sanity';



export const fetchSkills = async()=>{
  const query=groq`
   *[_type=="skill"]

`;

  const res= await sanityClient.fetch(query);

  // const data=await res?.json();
  const skills:Skill[]=res;

  return skills;
}