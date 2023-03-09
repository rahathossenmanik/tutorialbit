import React from 'react';
import { Result, Button } from 'antd';
import { Link } from 'react-router-dom';

const Page404 = () => {
  document.title = '404 Not Found - Tutorial Bit';
  return (
    <>
      <Result
        status='404'
        title='404'
        subTitle='Page Not Found!'
        extra={
          <Link to='/'>
            <Button type='primary'>Home</Button>
          </Link>
        }
      />
    </>
  );
};

export default Page404;
