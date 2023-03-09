import React from 'react';
import { Result, Button } from 'antd';

const Page404 = () => {
  document.title = '404 Not Found - Tutorial Bit';
  return (
    <>
      <Result
        status='404'
        title='404'
        subTitle='Page Not Found!'
        extra={
          <a href='/'>
            <Button type='primary'>Home</Button>
          </a>
        }
      />
    </>
  );
};

export default Page404;
