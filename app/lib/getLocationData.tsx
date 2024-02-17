/*import axios from 'axios';
import { FormState } from '../components/nav/SearchForm';

export const getResponseData = async (formState: FormState) => {
  try {
    const params = {
      description: formState?.position,
      location: formState?.location,
    };
    
    return await axios.get('api/jobs', { params })
    .then(response => response.data)
    .catch(error => {
      console.log(error);
      return null;
    });
  } catch (error) {
      console.log(error);
      return null;
    };
  }*/


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