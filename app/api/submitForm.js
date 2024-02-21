import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();
const submitForm =  async (req, res) => {
    const { title, description } = req.body;

    try {
        const jobPost = await prisma.jobPost.create({
            data: {
                title,
                description,
            },
        });

        res.status(200).json({ status: 'success', jobPost});
    } catch (err) {
        console.log(err);
        res.status(500).json({ status: 'error', error: err });
    }
}; export default submitForm;