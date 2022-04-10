// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { getRefreshToken } from '../../../lib/spotify';

export default async function handler(req, res) {
  const response = await getRefreshToken()
  console.log(response);
  res.status(200).json({ name: 'John Doe' });
}
