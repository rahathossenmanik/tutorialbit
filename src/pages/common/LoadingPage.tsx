import React from 'react';
import Loader from './../../components/Loader';

const LoadingPage = () => {
  document.title = 'Loading...';
  return (
    <>
      <div className='loading-page flex-column'>
        <Loader />
        <h1>Reading</h1>
      </div>
    </>
  );
};

export default LoadingPage;
