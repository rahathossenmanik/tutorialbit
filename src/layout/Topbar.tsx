import React from 'react';
import { useLocation } from 'react-router-dom';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
} from 'mdb-react-ui-kit';
import { courses } from '../constants/json/courses';

const Topbar = (props: any) => {
  const { toggleShow } = props;
  const { pathname: path } = useLocation();
  const pathArray = path?.split('/');

  return (
    <MDBNavbar expand='lg' light bgColor='light'>
      <MDBContainer fluid>
        <MDBNavbarNav className='d-flex flex-row align-items-center w-auto overflow-hidden fixed-top bg-white border-bottom'>
          <MDBNavbarToggler
            type='button'
            aria-label='Toggle navigation'
            onClick={toggleShow}>
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBNavbarBrand href='/'>
            <img
              src={process.env.REACT_APP_LOGO_URL}
              alt='logo'
              height={20}
              style={{ maxWidth: 160 }}
            />
          </MDBNavbarBrand>
          {courses.map((course) => (
            <MDBNavbarItem
              key={course.slug}
              tag='a'
              href={'/courses/' + course.slug}
              className='py-2 px-2'
              active={pathArray.includes(course.slug)}>
              {course.label}
            </MDBNavbarItem>
          ))}
          <MDBNavbarItem tag='a' href='/about-us' className='py-2 px-2'>
            About
          </MDBNavbarItem>
        </MDBNavbarNav>
        {/* <MDBNavbarNav className='d-flex flex-row justify-content-end w-auto'>
          <MDBNavbarItem className='me-3 me-lg-0 d-flex align-items-center'>
            <button type='button' className='btn btn-primary'>
              Start Learning
            </button>
          </MDBNavbarItem>
        </MDBNavbarNav> */}
      </MDBContainer>
    </MDBNavbar>
  );
};

export default Topbar;
