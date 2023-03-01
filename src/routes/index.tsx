import React from 'react';
import { pageRoutes } from './pageRoutes';
import { singleRoutes } from './singleRoutes';
import Page404 from './../pages/common/Page404';
import { IRoute } from './../interfaces/IRoute';
import { categoryRoutes } from './categoryRoutes';

const redirectRoute: IRoute = {
  path: '*',
  element: <Page404 />,
  title: '404 - Page Not Found',
};
const routes: IRoute[] = [
  ...pageRoutes,
  ...singleRoutes,
  ...categoryRoutes,
  redirectRoute,
];

export { routes };
