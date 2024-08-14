import axios, {AxiosError} from 'axios';
import {Alert} from 'react-native';

export const getFilm = async (url: string) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    const axiosError = error as AxiosError;

    if (!axiosError.response) {
      Alert.alert(
        'No Internet Connection',
        'Please connect to the internet and try again.',
      );
    } else {
      console.error('Error fetching data:', axiosError);
    }
    return null;
  }
};
