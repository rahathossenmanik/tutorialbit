import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MDBCollapse, MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import { left } from '../constants/json/left';
import { courses } from '../constants/json/courses';

const Left = (props: any) => {
  const { isShow } = props;
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const [course, setCourse] = useState<string>();
  const [leftMenuItems, setLeftMenuItems] = useState<
    {
      slug: string;
      label: string;
    }[]
  >([]);

  useEffect(() => {
    const pathArray = path?.split('/');
    courses.forEach((course) => {
      if (pathArray.includes(course.slug)) {
        setCourse(course.slug);
      }
    });
  }, [path]);

  useEffect(() => {
    left.forEach((courseItems) => {
      if (courseItems.course === course) {
        setLeftMenuItems(courseItems.posts);
      }
    });
  }, [course, navigate]);

  return (
    <MDBCollapse
      show={isShow}
      tag='nav'
      className='d-lg-block bg-white sidebar overflow-y-scroll'>
      <div className='position-sticky'>
        <MDBListGroup className='my-3'>
          {leftMenuItems?.map((menuItem) => (
            <MDBListGroupItem
              key={menuItem.slug}
              tag='a'
              href={'/' + course + '/' + menuItem.slug}
              action
              className='border-0'
              active={false}
              aria-current='true'>
              <i className='far fa-bookmark me-3'></i>
              {menuItem?.label}
            </MDBListGroupItem>
          ))}
        </MDBListGroup>
      </div>
    </MDBCollapse>
  );
};

export default Left;
