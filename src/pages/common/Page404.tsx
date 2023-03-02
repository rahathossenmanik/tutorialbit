import React from 'react';
import { Result, Button } from 'antd';
import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  document.title = '404 Not Found - Tutorial Bit'
  return (
    <>
      <Result
        status='404'
        title='404'
        subTitle='Page Not Found!'
        extra={
          <Button type='primary' onClick={() => navigate('/')}>
            Home
          </Button>
        }
      />
    </>
  );
};

export default Page404;
