import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Details from '../Pages/Details';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Details />} />
    </Routes>
  );
};
