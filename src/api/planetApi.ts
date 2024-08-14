import axios from 'axios';

export const getPlanetName = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data.name;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
