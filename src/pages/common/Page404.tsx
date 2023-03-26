import React from 'react';

const Page404 = () => {
  document.title = '404 Not Found - Tutorial Bit';
  return (
    <>
      <div className='page-404'>
        <div className='text-center'>
          <h1>
            <span id='digit1'>4</span>
            <span id='digit2'>0</span>
            <span id='digit3'>4</span>
          </h1>
          <h3 className='mb-3'>PAGE NOT FOUND</h3>
          <button type='button' className='btn btn-primary'>
            Return To Home
          </button>
        </div>
      </div>
    </>
  );
};

export default Page404;
