import React from 'react';
import Homepage from '../pages/archives/Homepage';
import { IRoute } from './../interfaces/IRoute';

export const pageRoutes: IRoute[] = [
  { path: '/page/:page', element: <Homepage />, title: 'Home' },
  { path: '/', element: <Homepage />, title: 'Home' },
];
