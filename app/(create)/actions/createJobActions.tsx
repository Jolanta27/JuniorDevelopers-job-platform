"use server"

import { revalidatePath } from "next/cache"
import {prisma} from "../../lib/prisma"

export type FormData = {
    id: String;
    description: string;
    location: string;
    author: string;
    salary: string;
    employmentType: string;
};

export async function createJob(data: FormData) {
    await prisma.jobPosting.create({
        data: {
            description: data.description,
            location: data.location,
            author: data.author,
            salary: parseFloat(data.salary),
            employmentType: data.employmentType,
        },
    });
    revalidatePath("/create");
}
