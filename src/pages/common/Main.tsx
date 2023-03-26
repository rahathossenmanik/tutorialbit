import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import Homepage from './../archives/Homepage';
import About from './../About';
import Single from '../Single';
import Page404 from './Page404';
import { left } from './../../constants/json/left';

const Main = () => {
  const { pathname: path } = useLocation();

  const pathArray = path?.split('/');
  switch (true) {
    case path === '/about-us':
      return <About />;
    case pathArray.includes('courses'):
      return (
        <Navigate
          to={
            `/${pathArray[2]}/${
              left.filter((course) => course.course === pathArray[2])[0]
                ?.posts[0]?.slug
            }` || '/'
          }
          replace={true}
        />
      );
    case pathArray.includes('page') || path === '/':
      return <Homepage />;
    case pathArray?.length === 3 || pathArray?.length === 4:
      return <Single slug={pathArray[2]} />;
    default:
      return <Page404 />;
  }
};

export default Main;
