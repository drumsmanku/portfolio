import { Projects } from '../typings';
import {groq} from 'next-sanity';
import { sanityClient } from '../sanity';


export const fetchProjects= async()=>{
  const query=groq`
   *[_type=="project"]{
   ...,
     technologies[]->
  }

`;

  const res = await sanityClient.fetch(query);
  // const data = await res?.json();
  const projects:Projects[]=res;

  return projects;
}