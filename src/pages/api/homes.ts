import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
export default async function handler(req: any, res: any) {
  // Create new home
  if (req.method === 'POST') {
    // TODO
    try {
      const { title, description, price, guests, beds, baths } = req.body;
      const home = await prisma.home.create({
        data: { title, description, price, guests, beds, baths },
      });

      res.status(200).json(home);
    } catch (e) {
      res.status(500).json({ message: 'Something went wrong' });
    }
  }
  // HTTP method not supported!
  else {
    res.setHeader('Allow', ['POST']);
    res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  }
}
