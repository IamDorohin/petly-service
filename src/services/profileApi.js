import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:3080/api';

export const getCurrentProfile = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.get('/profile');
  return response.data.data;
};

export const addUserPet = async (token, body) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  axios.defaults.headers.common.Accept = 'multypart/form-data';
  const response = await axios.post('/profile', body, {
    headers: {
      'Content-Type': 'multypart/form-data',
    },
  });
  return response.data.data.petList;
};

export const updateUserProfile = async (token, body) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.put('/current/update', body);
  return response.data.data;
};

export const removeUserPet = async (token, id) => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.delete(`/profile/${id}`);
  return response.data;
};
