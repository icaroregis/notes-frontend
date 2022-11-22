import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from '../Pages/Home';
import Details from '../Pages/Details';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};
