import axios from 'axios';

axios.defaults.baseURL = 'https://petly-service-backend.onrender.com/api';

export const getOurFriends = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.get(`/our_friends`);
  return response.data;
};
