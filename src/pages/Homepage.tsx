import { Col, List, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from '../constants/apis/typewiseArchiveEndpoints';
import { IPost } from '../interfaces/IPost';
import LoadingPage from './common/LoadingPage';

const Homepage = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [totalRows, setTotalRows] = useState<number>(0);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_URL +
            TYPEWISE_ARCHIVE_ENDPOINTS.posts(currentPage)
        );
        const data = await res.json();
        const totalPages = res.headers.get('x-wp-totalpages');
        const totalRows = res.headers.get('x-wp-total');
        setPosts(data);
        setTotalPages(Number(totalPages));
        setTotalRows(Number(totalRows));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);
  console.log({ posts, totalPages, totalRows });

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <List
        itemLayout='vertical'
        size='large'
        pagination={{
          onChange: (page) => {
            setCurrentPage(page);
          },
          total: totalRows,
          current: currentPage,
          pageSize: 5,
          showSizeChanger: false,
        }}
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
    </>
  );
};

export default Homepage;
