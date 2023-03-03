import React from 'react';
import { Col, List, PaginationProps, Row } from 'antd';
import { IPost } from './../interfaces/IPost';

interface IArchive {
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  totalRows: number;
  currentPage: number;
  posts: IPost[];
}

const Archive = (props: IArchive) => {
  const { setCurrentPage, currentPage, totalRows, posts } = props;

  const pagination: PaginationProps = {
    onChange: (page) => {
      setCurrentPage(page);
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
                  <img
                    width={200}
                    style={{ maxWidth: '100%' }}
                    alt='logo'
                    src='https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png'
                  />
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
