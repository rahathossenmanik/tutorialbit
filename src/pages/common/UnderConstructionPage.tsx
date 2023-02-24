import React from 'react';
import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const UnderConstructionPage = () => {
  const navigate = useNavigate();

  const onHome = () => {
    navigate('/');
  };
  return (
    <>
      <Result
        status='warning'
        title='Page under construction!'
        extra={
          <Button type='primary' key='home' onClick={onHome}>
            Home
          </Button>
        }
      />
    </>
  );
};

export default UnderConstructionPage;
