import axios from "axios";

const API_KEY = "5e0b62d0";

export const getData = async () => {
  const response = await axios.get(`https://my.api.mockaroo.com/shipments.json?key=${API_KEY}`);  

  return response;
};

