import React, { StrictMode, useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import MainContent, { ToExport } from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider, Route, useParams} from 'react-router-dom';
import Markpage, { MainBlog } from './util/markpage';
import NotFound from './util/components/notFound';

const Redirect = ({url}) => {
  useEffect(() => {
    window.location.href = url;
  }, []);

  return null;
};

const routes = [
  {
    path: "/",
    element: <ToExport><MainContent/></ToExport>,
  },
  {
    path:'/blog/',
    element: <ToExport article={true}><MainBlog/></ToExport>
  },
  {
    path:'/blog/*',
    element: <ToExport article={true}><Markpage/></ToExport>
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

