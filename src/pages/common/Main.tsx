import React from 'react';
import { useLocation } from 'react-router-dom';
import Homepage from './../archives/Homepage';
import About from './../About';
import Category from './../archives/Category';
import Single from '../Single';
import Page404 from './Page404';

const Main = () => {
  const { pathname: path } = useLocation();

  const pathArray = path?.split('/');
  switch (true) {
    case path === '/about-us':
      return <About />;
    case pathArray.includes('courses'):
      return (
        <Category slug={pathArray[2] || 'uncategorized'} page={pathArray[3]} />
      );
    case pathArray.includes('page') || path === '/':
      return <Homepage page={pathArray[2]} />;
    case pathArray?.length === 3:
      return <Single slug={pathArray[2]} />;
    default:
      return <Page404 />;
  }
};

export default Main;
