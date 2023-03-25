import React, { useState } from 'react';
import Topbar from './Topbar';
import Left from './Left';
import Main from '../pages/common/Main';
import RightSidebar from '../ads/RightSidebar';
import './basic.css';

const BaseLayout = () => {
  const [isShow, setIsShow] = useState(false);

  const toggleShow = () => setIsShow(!isShow);

  return (
    <>
      <Left isShow={isShow} />
      <Topbar toggleShow={toggleShow} />
      <main id='main-content'>
        <div className='row'>
          <div className='col-12 col-md-8 p-2'>
            <Main />
          </div>
          <div className='col-12 col-md-4 p-2'>
            <RightSidebar />
          </div>
        </div>
        <footer
          style={{
            textAlign: 'center',
            height: 50,
            paddingTop: 15,
            paddingBottom: 15,
          }}>
          Tutorial Bit 2016-{new Date().getFullYear()} © By Rastercell
        </footer>
      </main>
    </>
  );
};

export default BaseLayout;
