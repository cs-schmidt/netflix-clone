import React from 'react';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Credits from './components/Credits';

const router = createBrowserRouter(
  createRoutesFromElements(<Route path="/" element={<Home />} />)
);

export default function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Credits />
    </>
  );
}
