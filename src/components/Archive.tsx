import React from 'react';
import { Col, List, PaginationProps, Row } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import { IPost } from './../interfaces/IPost';
import { Link } from 'react-router-dom';
import Media from './Media';

interface IArchive {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalRows: number;
  currentPage: number;
  posts: IPost[];
  pathExceptPage: string;
}

const Archive = (props: IArchive) => {
  const { setCurrentPage, currentPage, totalRows, posts, pathExceptPage } =
    props;

  const pagination: PaginationProps = {
    onChange: (page) => {
      setCurrentPage(page);
    },
    itemRender: (current, type, originalElement) => {
      const getContent = () => {
        switch (type) {
          case 'prev':
            return <LeftOutlined />;
          case 'next':
            return <RightOutlined />;
          case 'jump-prev':
            return <DoubleLeftOutlined />;
          case 'jump-next':
            return <DoubleRightOutlined />;
          default:
            return current;
        }
      };
      return <Link to={pathExceptPage + current}>{getContent()}</Link>;
    },
    total: totalRows,
    current: currentPage,
    pageSize: 5,
    showSizeChanger: false,
  };

  return (
    <List
      itemLayout='vertical'
      size='large'
      pagination={pagination}
      dataSource={posts}
      renderItem={(post) => (
        <List.Item key={post.link}>
          <>
            <List.Item.Meta
              title={
                <a
                  href={post.link}
                  dangerouslySetInnerHTML={{
                    __html: post?.title?.rendered,
                  }}></a>
              }
            />
            {
              <Row gutter={[8, 8]}>
                <Col span={24} xl={8}>
                  <Media id={post?.featured_media} parent={post?.id} />
                </Col>
                <Col span={24} xl={16}>
                  <div
                    dangerouslySetInnerHTML={{
                      __html: post?.excerpt?.rendered,
                    }}></div>
                </Col>
              </Row>
            }
          </>
        </List.Item>
      )}
    />
  );
};

export default Archive;
