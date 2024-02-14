/*import axios from 'axios';

export default async function handler(req, res) {
    try {
        const { description, location} = req.query;

        console.log(`Location: ${location}, Description: ${description}`);

        const url = `https://api.adzuna.com/v1/api/jobs/${location}/search/1`;
        console.log(`URL: ${url}`);

        const response = await axios.get( url, {
            params: {
                app_id: process.env.ADZUNA_APP_ID,
                app_key: process.env.ADZUNA_APP_KEY,
                what: description,
            },
        });
        console.log(`Response: ${JSON.stringify(response.data)}`);

        res.status(200).json(response.data);
    } catch (error ) {
        console.log(error);
        res.status(500).json({ error: 'Error fetching jobs'});
    }
}*/