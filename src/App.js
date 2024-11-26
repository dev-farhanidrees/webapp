import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Table from "./components/Table";
import Chart from "./components/Chart";
import Footer from "./components/Footer";
import { getCountriesWithCapitals } from "./services/apiService";
import "./App.css";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await getCountriesWithCapitals();
        const formattedData = (data.data || []).map((country) => ({
          name: country.name || "Unknown",
          capital: country.capital || "Unknown",
          population: country.population || Math.floor(Math.random() * 100000000), // Mock for missing population
        }));
        setCountries(formattedData);
      } catch (err) {
        setError("Failed to load data. Please try again later.");
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) return <div className="spinner">Loading...</div>;
  if (error) return <div className="error-message">{error}</div>;

  return (
    <div className="app">
      <Navbar />
      <Table countries={countries} />
      <Chart data={countries} />
      <Footer />
    </div>
  );
};

export default App;
