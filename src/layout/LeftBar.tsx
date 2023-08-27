import React from 'react';
import { useEffect, useState } from 'react';
import { courses } from '../constants/json/courses';
import { left } from '../constants/json/left';
import { useLocation, useNavigate } from 'react-router-dom';

// NavLink component
const NavLink = ({ ...props }) => {
  const { children, href = '', className = '', active = '' } = props;

  const [pathname, setPathname] = useState('/');

  const isActive = pathname === href;
  const activeClass = isActive ? active : '';

  useEffect(() => {
    setPathname(window.location.pathname);
  }, [props]);

  return (
    <a href={href} {...props} className={`${activeClass} ${className}`}>
      {children}
    </a>
  );
};

// Search Box component
const SearchBox = ({ ...props }) => (
  <div className='relative w-full'>
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 20 20'
      fill='currentColor'
      className='w-5 h-5 text-gray-400 absolute left-3 inset-y-0 my-auto'>
      <path
        fillRule='evenodd'
        d='M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z'
        clipRule='evenodd'
      />
    </svg>

    <input
      {...props}
      type='email'
      className='w-full pl-12 pr-3 py-2 bg-white text-sm text-gray-500 bg-transparent outline-none border ring-blue-600 focus:ring-2 shadow-sm rounded-lg duration-200'
    />
  </div>
);

const LeftBar = () => {
  const navigate = useNavigate();
  const { pathname: path } = useLocation();
  const pathArray = path?.split('/');

  const [course, setCourse] = useState<string>();
  const [leftMenuItems, setLeftMenuItems] = useState<
    {
      slug: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    courses.forEach((course) => {
      if (pathArray.includes(course.slug)) {
        setCourse(course.slug);
      }
    });
  }, [pathArray]);

  useEffect(() => {
    left.forEach((courseItem) => {
      if (courseItem.course === course) {
        setLeftMenuItems(courseItem.posts);
      }
    });
  }, [course, navigate]);

  return (
    <>
      <nav className='fixed top-0 left-0 pl-1 w-0 h-full bg-white space-y-8 overflow-auto lg:w-64'>
        <div className='sticky top-0 pt-20 bg-white'>
          <div className='px-1'>
            <SearchBox placeholder='Search...' />
          </div>
        </div>
        <div className='text-[0.9rem] space-y-6 pb-2'>
          <div className='text-gray-600 px-1'>
            <ul>
              {leftMenuItems?.map((menuItem: any, idx: number) => (
                <li key={idx}>
                  <NavLink
                    href={'/' + course + '/' + menuItem?.slug + '/'}
                    active='text-gray-900 bg-gray-100 border-indigo-600'
                    className='block w-full p-2 border-l hover:border-indigo-600 hover:text-gray-900 hover:bg-gray-100 duration-150 duration-150'>
                    {menuItem?.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default LeftBar;
