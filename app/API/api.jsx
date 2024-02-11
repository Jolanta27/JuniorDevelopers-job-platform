import React, { useEffect } from 'react';
import axios from 'axios';

const API = ( { formState}) => {
    useEffect(() => {
        const fetchResponse = async () => {
            console.log(formState);
            try {
                const params = {};
                if (formState.position) {
                    params.description = formState.position;
                }
                if (formState.location) {
                    params.location = formState.location;
                }
                const response = await axios.get('https://jobs.github.com/positions.json', { 
                    params,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${process.env.KEY_ACCESS}`
                    },
                }); 
                    console.log(response.data);
                  } catch (error) {
                    console.error(error);
                  }
                };
                fetchResponse();
    }, [formState]);

            return;
        };

export default API;