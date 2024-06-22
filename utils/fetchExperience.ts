import { WExperience} from '../typings';
import {groq} from 'next-sanity';
import { sanityClient } from '../sanity';



export const fetchExperience = async()=>{
  const query=groq`
 *[_type=="experience"]{
   ...,
   technologies[]->
 }

`;
  const res= await sanityClient.fetch(query);

  const experiences:WExperience[]=res;

  return experiences;
}