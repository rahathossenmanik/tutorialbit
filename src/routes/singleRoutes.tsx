import React from 'react';
import { IRoute } from './../interfaces/IRoute';
import Single from './../pages/Single';

export const singleRoutes: IRoute[] = [
  { path: '/:course/:slug', element: <Single />, title: 'Single' },
];
