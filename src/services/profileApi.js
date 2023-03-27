import axios from 'axios';

axios.defaults.baseURL = 'https://petly-service-backend.onrender.com/api';

export const getCurrentProfile = async token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  const response = await axios.get(`/favorite`);
  return response.data;
};

// export const getSearchingMovies = async searchQuery => {
//   const response = await axios.get(
//     `${BASE_URL}/${SEARCHING}?api_key=${KEY}&query=${searchQuery}`
//   );
//   return response.data;
// };

// export const getCurrentMovie = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/${CURRENT}/${movieId}?api_key=${KEY}`
//   );

//   return response.data;
// };

// export const getMovieCast = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/${CURRENT}/${movieId}/credits?api_key=${KEY}`
//   );

//   return response.data;
// };

// export const getMovieReviews = async movieId => {
//   const response = await axios.get(
//     `${BASE_URL}/${CURRENT}/${movieId}/reviews?api_key=${KEY}`
//   );

//   return response.data;
// };
