import { Social} from '../typings';
import {groq} from 'next-sanity';
import { sanityClient } from '../sanity';


export const fetchSocials = async () => {
  const query=groq`
   *[_type=="social"]

`;

  const res= await sanityClient.fetch(query);
  // const data=await res?.json();
  const socials:Social[]=res;

  return socials;
}