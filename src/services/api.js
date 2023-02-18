import axios from "axios";

// const API_KEY = "d654e250";
// export const BASE_URL = 'https://api.themoviedb.org/3/';
// export const API_URL = `${BASE_URL}/trending/movie/day?api_key=${API_KEY}`;



export const getData = async () => {
  const response = await axios.get(
    // `https://randomuser.me/api/`
    `https://my.api.mockaroo.com/shipments.json?key=5e0b62d0`
  );  

  return response;
};

