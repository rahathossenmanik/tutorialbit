import React from 'react';
import { Result, Spin } from 'antd';

const LoadingPage = () => {
  document.title = 'Loading...';
  return (
    <>
      <Result icon={<Spin size="large" />} style={{ paddingTop: '40vh' }} />
    </>
  );
};

export default LoadingPage;
