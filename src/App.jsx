import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/app.routes';

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
