import React, { useRef } from 'react';
// src/utils/dataUtils.js
export const aggregatePopulationData = (cityData) => {
    return cityData.reduce((total, city) => total + city.populationCounts[0]?.value || 0, 0);
  };