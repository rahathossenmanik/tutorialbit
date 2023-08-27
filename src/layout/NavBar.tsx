import { Icon } from '@iconify/react';
import React from 'react';
import { useEffect, useState } from 'react';
import { navigation } from '../constants/json/courses';

const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [activeMenuItem, setActiveMenuItem] = useState<number | false>(false);

  useEffect(() => {
    document.onclick = (e: any) => {
      if (!e?.target?.closest('.nav-menu')) setActiveMenuItem(false);
    };
  }, []);

  return (
    <>
      <nav
        className={`sticky top-0 pt-1 z-50 bg-white w-full md:text-sm md:border-none ${
          isMenuOpen ? 'shadow-lg rounded-b-xl md:shadow-none' : ''
        }`}>
        <div className="items-center gap-x-14 px-7 max-w-screen-xl mx-auto md:flex">
          <div className="flex items-center justify-between md:block">
            <a href="/">
              <img src="https://www.floatui.com/logo.svg" width={120} height={50} alt="Float UI logo" />
            </a>
            <div className="md:hidden">
              <button className="text-gray-500 hover:text-gray-800" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? (
                  <Icon icon="ep:close-bold" width="24" height="24" className="mt-1" />
                ) : (
                  <Icon icon="ooui:menu" width="24" height="24" className="mt-1" />
                )}
              </button>
            </div>
          </div>
          <div className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${isMenuOpen ? 'block' : 'hidden'}`}>
            <ul className="items-center space-y-0 md:flex">
              {navigation.map((item, index) => {
                return (
                  <li key={index}>
                    <button
                      className="w-full flex items-center justify-between py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150"
                      onClick={() => setActiveMenuItem(activeMenuItem !== index ? index : false)}>
                      {item.title}
                      {item?.courses?.length > 0 &&
                        (activeMenuItem === index ? (
                          <Icon icon="ep:arrow-up" className="ml-1 mt-1" />
                        ) : (
                          <Icon icon="ep:arrow-down" className="ml-1 mt-1" />
                        ))}
                    </button>
                    {item?.courses?.length > 0 && activeMenuItem === index ? (
                      <div className="bg-white z-50 mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0">
                        <ul className="max-w-screen-xl mx-auto grid items-center gap-4 md:p-8 md:grid-cols-2 lg:grid-cols-3">
                          {item?.courses?.map((course, index) => (
                            <li key={index} className="group p-1 rounded-lg hover:bg-gray-100 duration-150 cursor-pointer">
                              <a href={'/courses/' + course.slug} className="flex gap-3 items-center">
                                <div className="w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white">
                                  <Icon icon={course.icon} width="16" height="16" />
                                </div>
                                <div>
                                  <span className="text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base">
                                    {course.label}
                                  </span>
                                </div>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : (
                      ''
                    )}
                  </li>
                );
              })}
              <div className="flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0">
                <li>
                  <a
                    href="/"
                    className="block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline">
                    Jobs
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {isMenuOpen ? (
        <div
          className="z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setIsMenuOpen(false)}></div>
      ) : (
        ''
      )}
    </>
  );
};

export default NavBar;
