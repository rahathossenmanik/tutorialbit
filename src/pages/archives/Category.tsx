import { Col, List, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from '../../constants/apis/typewiseArchiveEndpoints';
import { get, getFull } from '../../helpers/api_helpers';
import { IPost } from '../../interfaces/IPost';
import LoadingPage from '../common/LoadingPage';
import { ICategory } from './../../interfaces/ICategory';

const Category = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [category, setCategory] = useState<ICategory>();
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalRows, setTotalRows] = useState<number>(0);

  // Use Effect to fetch posts by category
  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const category: ICategory[] = await get(
          process.env.REACT_APP_BASE_URL + TYPEWISE_ARCHIVE_ENDPOINTS.categoryBySlug(),
          { params: { slug: slug } }
        );
        setCategory(category[0]);
        const res = await getFull(
          process.env.REACT_APP_BASE_URL + TYPEWISE_ARCHIVE_ENDPOINTS.postsByCategory(currentPage, category[0]?.id)
        );
        const data = res?.data;
        const totalRows = res?.headers?.['x-wp-total'];
        setPosts(data);
        setTotalRows(Number(totalRows));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage, slug]);

  document.title = (category?.name || 'Category Archive') + ' - Tutorial Bit';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <List
        itemLayout="vertical"
        size="large"
        pagination={{
          onChange: (page) => {
            setCurrentPage(page);
          },
          total: totalRows,
          current: currentPage,
          pageSize: 5,
          showSizeChanger: false
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
                      __html: post?.title?.rendered
                    }}></a>
                }
              />
              {
                <Row gutter={[8, 8]}>
                  <Col span={24} xl={8}>
                    <img
                      width={200}
                      style={{ maxWidth: '100%' }}
                      alt="logo"
                      src="https://gw.alipayobjects.com/zos/rmsportal/mqaQswcyDLcXyDKnZfES.png"
                    />
                  </Col>
                  <Col span={24} xl={16}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: post?.excerpt?.rendered
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

export default Category;
