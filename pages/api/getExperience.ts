import type {NextApiRequest, NextApiResponse} from 'next'
import {groq} from 'next-sanity';
import { sanityClient } from '../../sanity';
import { WExperience } from '../../typings';


const query=groq`
 *[_type=="experience"]{
   ...,
   technologies[]->
 }

`;
type Data={
  experiences:WExperience[];
};
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const experiences:WExperience[]=await sanityClient.fetch(query);
  res.status(200).json({ experiences });
}
