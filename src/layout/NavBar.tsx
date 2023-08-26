import { Icon } from '@iconify/react';
import React from 'react';
import { useEffect, useState } from 'react';
import {
  csCourses,
  miscellaneous,
  programmingCourses,
  webCourses,
} from '../constants/json/courses';

const NavBar = () => {
  const [state, setState] = useState(false);
  const [drapdownState, setDrapdownState] = useState<{
    isActive: boolean;
    idx: number;
  }>({
    isActive: false,
    idx: 0,
  });

  // Replace javascript:void(0) paths with your paths
  const navigation = [
    {
      title: 'Computer Science',
      onClick: 'javascript:void(0)',
      courses: csCourses,
    },
    {
      title: 'Programming',
      onClick: 'javascript:void(0)',
      courses: programmingCourses,
    },
    {
      title: 'Web Development',
      onClick: 'javascript:void(0)',
      courses: webCourses,
    },
    {
      title: 'Miscellaneous',
      onClick: 'javascript:void(0)',
      courses: miscellaneous,
    },
  ];

  useEffect(() => {
    document.onclick = (e: any) => {
      const target = e.target;
      if (!target?.closest('.nav-menu'))
        setDrapdownState({ isActive: false, idx: 0 });
    };
  }, []);

  return (
    <>
      <nav
        className={`relative z-50 bg-white w-full md:static md:text-sm md:border-none ${
          state ? 'shadow-lg rounded-b-xl md:shadow-none' : ''
        }`}>
        <div className='items-center gap-x-14 px-4 max-w-screen-xl mx-auto md:flex md:px-8'>
          <div className='flex items-center justify-between md:block'>
            <a href='javascript:void(0)'>
              <img
                src='https://www.floatui.com/logo.svg'
                width={120}
                height={50}
                alt='Float UI logo'
              />
            </a>
            <div className='md:hidden'>
              <button
                className='text-gray-500 hover:text-gray-800'
                onClick={() => setState(!state)}>
                {state ? (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    className='h-6 w-6'
                    viewBox='0 0 20 20'
                    fill='currentColor'>
                    <path
                      fillRule='evenodd'
                      d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                      clipRule='evenodd'
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='currentColor'
                    className='w-6 h-6'>
                    <path
                      fillRule='evenodd'
                      d='M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm8.25 5.25a.75.75 0 01.75-.75h8.25a.75.75 0 010 1.5H12a.75.75 0 01-.75-.75z'
                      clipRule='evenodd'
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
          <div
            className={`nav-menu flex-1 pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              state ? 'block' : 'hidden'
            }`}>
            <ul className='items-center space-y-0 md:flex'>
              {navigation.map((item, idx) => {
                return (
                  <li key={idx}>
                    <button
                      className='w-full flex items-center justify-between py-2 px-3 rounded-lg text-gray-700 hover:text-gray-900 hover:bg-gray-100 duration-150'
                      onClick={() =>
                        setDrapdownState({
                          idx,
                          isActive: !drapdownState.isActive,
                        })
                      }>
                      {item.title}
                      {drapdownState.idx === idx && drapdownState.isActive ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='w-5 h-5'>
                          <path
                            fillRule='evenodd'
                            d='M14.77 12.79a.75.75 0 01-1.06-.02L10 8.832 6.29 12.77a.75.75 0 11-1.08-1.04l4.25-4.5a.75.75 0 011.08 0l4.25 4.5a.75.75 0 01-.02 1.06z'
                            clipRule='evenodd'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          className='w-5 h-5'>
                          <path
                            fillRule='evenodd'
                            d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                            clipRule='evenodd'
                          />
                        </svg>
                      )}
                    </button>
                    {item?.courses?.length > 0 &&
                    drapdownState.idx === idx &&
                    drapdownState.isActive ? (
                      <div className='bg-white mt-6 inset-x-0 top-20 w-full md:absolute md:border-y md:shadow-md md:mt-0'>
                        <ul className='max-w-screen-xl mx-auto grid items-center gap-4 md:p-8 md:grid-cols-2 lg:grid-cols-3'>
                          {item?.courses?.map((course, idx) => (
                            <li
                              key={idx}
                              className='group p-1 rounded-lg hover:bg-gray-100 duration-150 cursor-pointer'>
                              <a
                                href={'/courses/' + course.slug}
                                className='flex gap-3 items-center'>
                                <div className='w-8 h-8 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center duration-150 group-hover:bg-indigo-600 group-hover:text-white'>
                                  <Icon
                                    icon={course.icon}
                                    width='16'
                                    height='16'
                                  />
                                </div>
                                <div>
                                  <span className='text-gray-800 duration-200 group-hover:text-indigo-600 text-sm font-medium md:text-base'>
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
              <div className='flex-1 items-center justify-end gap-x-6 space-y-3 md:flex md:space-y-0'>
                <li>
                  <a
                    href='javascript:void(0)'
                    className='block py-3 px-4 font-medium text-center text-white bg-indigo-600 hover:bg-indigo-500 active:bg-indigo-700 active:shadow-none rounded-lg shadow md:inline'>
                    Jobs
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </nav>
      {state ? (
        <div
          className='z-10 fixed top-0 w-screen h-screen bg-black/20 backdrop-blur-sm md:hidden'
          onClick={() => setState(false)}></div>
      ) : (
        ''
      )}
    </>
  );
};

export default NavBar;

const dropdownNavs = [
  {
    label: 'Products',
    navs: [
      {
        title: 'Analytics',
        desc: 'Duis aute irure dolor in reprehenderit',
        path: 'javascript:void(0)',
        icon: <Icon icon='carbon:data-structured' width='32' height='32' />,
      },
      {
        title: 'Reports',
        desc: 'Duis aute irure dolor in reprehenderit',
        path: 'javascript:void(0)',
        icon: <Icon icon='carbon:data-structured' width='32' height='32' />,
      },
    ],
  },
  {
    label: 'Resources',
    navs: [
      {
        title: 'Blog',
        desc: 'Duis aute irure dolor in reprehenderit',
        path: 'javascript:void(0)',
        icon: <Icon icon='carbon:data-structured' width='32' height='32' />,
      },
      {
        title: 'Community',
        desc: 'Duis aute irure dolor in reprehenderit',
        path: 'javascript:void(0)',
        icon: <Icon icon='carbon:data-structured' width='32' height='32' />,
      },
    ],
  },
  {
    label: 'Company',
    navs: [
      {
        title: 'About us',
        desc: 'Duis aute irure dolor in reprehenderit',
        path: 'javascript:void(0)',
        icon: <Icon icon='carbon:data-structured' width='32' height='32' />,
      },
      {
        title: 'Careers',
        desc: 'Duis aute irure dolor in reprehenderit',
        path: 'javascript:void(0)',
        icon: <Icon icon='carbon:data-structured' width='32' height='32' />,
      },
    ],
  },
];
