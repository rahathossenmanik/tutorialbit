import React from 'react';
import Homepage from '../pages/archives/Homepage';
import { IRoute } from './../interfaces/IRoute';

export const pageRoutes: IRoute[] = [
  { path: '/', element: <Homepage />, title: 'Home' },
];
