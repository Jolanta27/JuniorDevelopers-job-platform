import axios from 'axios';
import { FormState } from '../components/SearchForm';

export const getResponseData = async (formState: FormState) => {
  try {
    const params = {
      description: formState?.position,
      location: formState?.location,
    };
  
    const response = await axios.get('https://jobs.github.com/positions.json', {
      params,
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.KEY_ACCESS}`,
      },
    });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};