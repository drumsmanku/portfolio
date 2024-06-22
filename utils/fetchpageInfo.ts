import { PageInfo } from '../typings';
import {groq} from 'next-sanity';
import { sanityClient } from '../sanity';


export const fetchpageInfo = async() =>{
  const query=groq`
 *[_type == "pageInfo"][0]

`;

  const res= await sanityClient.fetch(query);
  // const data=await res?.json();
  const pageInfo:PageInfo=res;

  return pageInfo;
}