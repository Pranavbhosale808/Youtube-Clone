import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';

const options = {
  params: {
    maxResults: 500,
  },
  headers: {
    'X-RapidAPI-Key': '21dbb8a813msh59215ec923cae47p1c4571jsnd013263c94b4',
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};