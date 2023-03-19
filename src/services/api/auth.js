import axios from 'axios';

const BASE_URL = '';

const instance = axios.create({
  baseURL: BASE_URL,
});

const token = {
  set(token) {
    instance.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    instance.defaults.headers.common.Authorization = '';
  },
};

export const register = async userSignup => {
  const { data } = await instance.post('/api/users/register', userSignup);
  return data;
};

export const login = async userLogin => {
  const { data } = await instance.post('/api/users/login', userLogin);
  token.set(data.token);
  return data;
};

export const logout = async () => {
  const { data } = await instance.get('/api/users/logout');
  token.unset();
  return data;
};

export const reset = async resetData => {
  const { data } = await instance.post('/api/users/recovery', resetData);
  return data;
};

export const resetPassword = async (token, resetData) => {
  const { data } = await instance.post(
    `/api/users/recovery/${token}`,
    resetData
  );
  return data;
};

export const fetchCurrentUser = async persistedToken => {
  token.set(persistedToken);
  const data = await instance.get('/api/users/current');
  return data;
};

export const updateUserData = async updateData => {
  const { data } = await instance.patch('/api/users/update', updateData);
  return data;
};

export const updateUserAvatar = async updateAvatar => {
  const { data } = await instance.patch('/api/users/avatar', updateAvatar, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return data;
};

export default instance;
