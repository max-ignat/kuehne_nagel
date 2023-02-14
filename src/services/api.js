import axios from "axios";

const API_KEY = 'e2607c9eac62b5ef95e86e9fe77035f2';
export const BASE_URL = 'https://api.themoviedb.org/3/';
export const API_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;



export const getTrending = async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${API_KEY}`
  );  

  return response.data.results;
};

export const searchMovies = async query => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${query}`
  );

  return response.data.results;
};

export const getMovieDetails = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieCredits = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}`
  );

  return response.data;
};

export const getMovieReviews = async id => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=${API_KEY}`
  );

  return response.data;
};