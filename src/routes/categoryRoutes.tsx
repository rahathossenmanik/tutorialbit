import React from 'react';
import Category from '../pages/archives/Category';
import { IRoute } from './../interfaces/IRoute';

export const categoryRoutes: IRoute[] = [
  {
    path: '/courses/:slug/:page',
    element: <Category />,
    title: 'Category Archives',
  },
  { path: '/courses/:slug', element: <Category />, title: 'Category Archives' },
];
