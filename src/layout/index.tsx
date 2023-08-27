import React from 'react';
import Main from '../pages/common/Main';
import RightSidebar from '../ads/RightSidebar';
import './basic.css';
import NavBar from './NavBar';
import LeftBar from './LeftBar';
import { useLocation } from 'react-router-dom';

const BaseLayout = () => {
  const { pathname: path } = useLocation();

  return (
    <>
      <NavBar />
      {path !== '/' ? <LeftBar /> : null}
      <main id={path !== '/' ? 'main-content' : 'full-content'}>
        <div className="grid grid-cols-3 gap-2">
          <div className="col-span-3 md:col-span-2 px-3 py-5">
            <Main />
          </div>
          <div className="col-span-0 md:col-span-1 px-1 py-5">
            <RightSidebar />
          </div>
        </div>
        <footer
          style={{
            textAlign: 'center',
            height: 50,
            paddingTop: 15,
            paddingBottom: 15
          }}
          className="text-gray-800">
          <a href="/" target="_blank" rel="noopener noreferrer" className="font-semibold hover:text-indigo-500">
            Tutorial Bit
          </a>{' '}
          2016-{new Date().getFullYear()} © By{' '}
          <a
            href="https://rastercell.com"
            target="_blank"
            rel="noopener noreferrer"
            className=" font-semibold hover:text-indigo-500">
            Rastercell
          </a>
        </footer>
      </main>
    </>
  );
};

export default BaseLayout;
