import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'


import {
  createRoutesFromElements, createBrowserRouter, Route, RouterProvider
} from "react-router-dom";
import Home from './pages/Home.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/Home" element={<Home />}></Route>
  )
);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />

  </StrictMode>,
)
