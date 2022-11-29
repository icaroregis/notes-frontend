import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import Profile from '../Pages/Profile';
import CreateNote from '../Pages/NoteCreate';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/createnote" element={<CreateNote />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/details/:id" element={<Details />} />
    </Routes>
  );
};
