import { WExperience} from '../typings';

export const fetchExperience = async()=>{
  const res= await fetch(`http://localhost:3000/api/getExperience`);
  const data=await res.json();
  const experiences:WExperience[]=data.experiences;

  return experiences;
}