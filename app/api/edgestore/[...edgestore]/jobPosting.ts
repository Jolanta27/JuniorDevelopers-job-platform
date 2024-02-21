import { PrismaClient } from '@prisma/client';
 
const prisma = new PrismaClient();

export default async function handle(req, res) {
  if( req.method === 'POST') {
  const { title, location, companyName, salary, employmentType, description } = req.body;

  try {
    const jobPosting = await prisma.jobPosting.create({
      data: {
        title,
        location,
        companyName,
        salary,
        employmentType,
        description,
      },
    });
    res.status(201).json(jobPosting);
  } catch (error) {
    res.status(500).json({error: 'An error occured white trying to create a job posting'});
  }
} else {
  //Other methods
}
};
