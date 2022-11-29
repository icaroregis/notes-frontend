import React from 'react';
import { Routes, Route } from 'react-router-dom';

//pages
import Home from '../Pages/Home';
import Details from '../Pages/Details';
import SignIn from '../Pages/SignIn';
import SignUp from '../Pages/SignUp';
import Profile from '../Pages/Profile';
import CreateNote from '../Pages/NoteCreate';

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/details" element={<Details />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/createnote" element={<CreateNote />} />
    </Routes>
  );
};
