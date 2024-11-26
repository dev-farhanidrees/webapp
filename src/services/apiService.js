// src/services/apiService.js
import axios from "axios";

const BASE_URL = "https://countriesnow.space/api/v0.1";

export const getCountriesWithCapitals = async () => {
  const response = await axios.get(`${BASE_URL}/countries/capital`);
  return response.data;
  try {
    const response = await axios.get(`${BASE_URL}/countries/capital`);
    return response.data;
  } catch (error) {
    console.error("Error fetching countries:", error);
    return { data: [] }; // Return empty data on failure
  }
};

export const getCityPopulation = async (country) => {
  const response = await axios.get(`${BASE_URL}/countries/population/cities`, {
    params: { country },
  });
  return response.data;
};
