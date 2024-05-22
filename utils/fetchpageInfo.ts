import { PageInfo } from '../typings';

export const fetchpageInfo = async() =>{
  const res= await fetch(`http://localhost:3000/api/getpageInfo`);
  const data=await res.json();
  const pageInfo:PageInfo=data.pageInfo;

  return pageInfo;
}