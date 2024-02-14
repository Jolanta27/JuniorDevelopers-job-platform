import React, { useEffect } from 'react';
import axios from 'axios';
import { FormState } from '../components/nav/SearchForm';

export const getResponseData = async (formState: FormState) => {
  try {
    const params = {
      description: formState?.position,
      location: formState?.location,
    };
    // if (formState?.position) {
    //   params.description = formState.position;
    // }
    // if (formState.location) {
    //   params.location = formState.location;
    // }
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
