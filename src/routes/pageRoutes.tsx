import React from 'react';
import Homepage from './../pages/Homepage';
import { IRoute } from './../interfaces/IRoute';

export const pageRoutes: IRoute[] = [
  { path: '/', element: <Homepage />, title: 'Dashboard' },
];
