import React from 'react';
import { IRoute } from './../interfaces/IRoute';
import Single from './../pages/Single';
import About from './../pages/About';

export const singleRoutes: IRoute[] = [
  { path: '/:course/:slug', element: <Single />, title: 'Single' },
  { path: '/about-us', element: <About />, title: 'About Us' }
];
