import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import SignIn from '../Pages/SignIn';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/signin" element={<SignIn />} />
    </Routes>
  );
};
