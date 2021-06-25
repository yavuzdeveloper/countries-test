import axios from "axios";
 
const COUNTRIES_ENDPOINT = "https://restcountries.eu/rest/v2/all";

const fetchCountries = async () => {
  return await axios.get(COUNTRIES_ENDPOINT).then(res => res.data);
};

export default fetchCountries;

