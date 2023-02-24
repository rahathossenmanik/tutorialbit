import React from 'react';
import { Result, Spin } from 'antd';

const LoadingPage = () => {
  return (
    <>
      <Result icon={<Spin size='large' />} style={{ paddingTop: '40vh' }} />
    </>
  );
};

export default LoadingPage;
