import React from 'react';
import { pageRoutes } from './pageRoutes';
import Page404 from './../pages/common/Page404';
import { IRoute } from './../interfaces/IRoute';

const redirectRoute: IRoute = {
  path: '*',
  element: <Page404 />,
  title: '404 - Page Not Found',
};
const routes: IRoute[] = [...pageRoutes, redirectRoute];

export { routes };
