import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        const response = await axios.get('https://indeed-indeed.p.rapidapi.com/apisearch', {
            headers: {
                'X-RapidAPI-Key': process.env.JOB_SEARCH_API_INDEED_KEY,
                'X-RapidAPI-Host': 'indeed12.p.rapidapi.com'
            },
            params: {
                query: 'developer',
                l: 'Warsaw',
                limit: 8,
                q: 'javascript',
            }
        });
        const sanitizedData = JSON.parse(JSON.stringify(response.data.results));

        res.status(200).json(sanitizedData);
    } catch (error) {
        res.status(500).json({ error: error.toString() });
    }
};