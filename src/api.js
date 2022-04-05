import React from 'react';
import axios from 'axios';

const ip = 'https://rickandmortyapi.com/api';

async function apiGET(params) {
  const {query} = params;

  try {
    response = await axios.get(ip + query);
    return response.data.results;
  } catch (error) {
    return [];
  }
}
export default apiGET;
