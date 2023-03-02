import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { left } from '../constants/json/left';
import { courses } from '../constants/json/courses';

const { Sider } = Layout;

const Left = () => {
  const {
    token: { colorBgContainer }
  } = theme.useToken();
  const navigate = useNavigate();
  const { pathname: path } = useLocation();

  const [course, setCourse] = useState<string>();
  const [leftMenuItems, setLeftMenuItems] = useState<MenuProps['items']>([]);

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
        setLeftMenuItems(
          courseItems.slugs.map((slug) => ({
            key: slug,
            label: <Link to={'/' + courseItems.course + '/' + slug}>{courseItems.label}</Link>,
            onClick: () => navigate('/' + courseItems.course + '/' + slug)
          }))
        );
      }
    });
  }, [course, navigate]);

  // const leftMenuItems: MenuProps['items'] =
  //   left.map((courseItems) => {
  //     if (courseItems.course === course) {
  //       return courseItems.slugs.map((slug) => ({
  //         key: slug,
  //         label: <Link to={'/' + courseItems.course + '/' + slug}>{courseItems.label}</Link>,
  //         onClick: () => navigate('/' + courseItems.course + '/' + slug)
  //       }));
  //     }
  //     return null;
  //   })[0] || [];

  return (
    <Sider breakpoint="md" collapsedWidth="0" style={{ background: colorBgContainer }} width={250}>
      <Menu
        mode="inline"
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%' }}
        items={leftMenuItems}
      />
    </Sider>
  );
};

export default Left;
