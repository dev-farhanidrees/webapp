import React from "react";
import "./Table.css";

const Table = ({ countries }) => (
  <table className="data-table">
    <thead>
      <tr>
        <th>Country</th>
        <th>Capital</th>
        <th>Population</th>
      </tr>
    </thead>
    <tbody>
      {countries.map((country, index) => (
        <tr key={index}>
          <td>{country.name || "Unknown"}</td>
          <td>{country.capital || "Unknown"}</td>
          <td>{country.population ? country.population.toLocaleString() : "N/A"}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default Table;
