import React, { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import MainContent, { ToExport } from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, useParams} from 'react-router-dom';
import Markpage, { MainBlog } from './util/markpage';
import NotFound from './util/components/notFound';
import Papers from './util/pages/papers';
import About from './util/pages/about';

const Redirect = ({url}) => {
  useEffect(() => {
    window.location.href = url;
  }, []);

  return null;
};

const routes = [
  {
    path:'/',
    element: <ToExport><MainBlog/></ToExport>
  },
  {
    path:'/papers',
    element: <ToExport><Papers/></ToExport>
  },
  {
    path:'/about',
    element: <ToExport><About/></ToExport>
  },
  {
    path:'/*',
    element: <ToExport><Markpage/></ToExport>
  },
  {
    path: "*",
    element: <ToExport><NotFound/></ToExport>
  }
];


const router = createBrowserRouter(routes);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

reportWebVitals();

