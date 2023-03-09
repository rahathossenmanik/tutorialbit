import React, { useEffect, useState } from 'react';
import type { MenuProps } from 'antd';
import { Layout, Menu, theme } from 'antd';
import { BookOutlined } from '@ant-design/icons';
import { useLocation, useNavigate } from 'react-router-dom';
import { left } from '../constants/json/left';
import { courses } from '../constants/json/courses';

const { Sider } = Layout;

const Left = () => {
  const {
    token: { colorBgContainer },
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
          courseItems.posts.map((post) => ({
            key: post.slug,
            label: (
              <>
                <BookOutlined style={{ paddingRight: 8 }} />
                <a href={'/' + courseItems.course + '/' + post.slug}>
                  {post.label}
                </a>
              </>
            ),
          }))
        );
      }
    });
  }, [course, navigate]);

  return (
    <Sider
      breakpoint='md'
      collapsedWidth='0'
      trigger={null}
      style={{
        background: colorBgContainer,
      }}
      className='inner-body'
      width={250}>
      <Menu
        mode='inline'
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        style={{ height: '100%', padding: '10px 0' }}
        items={leftMenuItems}
      />
    </Sider>
  );
};

export default Left;
