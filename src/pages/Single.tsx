import React, { useEffect, useState } from 'react';
import ArticleBottom from '../ads/ArticleBottom';
import ArticleTop from '../ads/ArticleTop';
import { get } from '../helpers/api_helpers';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from './../constants/apis/typewiseArchiveEndpoints';
import { IPost } from './../interfaces/IPost';
import LoadingPage from './common/LoadingPage';

const Single = (props: any) => {
  const { slug } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const fetchBySlug = async () => {
      try {
        const res = await get(
          process.env.REACT_APP_BASE_URL +
            TYPEWISE_ARCHIVE_ENDPOINTS.postBySlug(),
          {
            params: { slug: slug },
          }
        );
        if (res.length === 1) setPost(res[0]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchBySlug();
  }, [slug]);

  document.title = (post?.title?.rendered || 'Post') + ' - Tutorial Bit';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <h1
        dangerouslySetInnerHTML={{
          __html: post?.title?.rendered || '',
        }}></h1>
      <ArticleTop />
      <div
        className='single-post'
        dangerouslySetInnerHTML={{
          __html: post?.content?.rendered || '',
        }}></div>
      <ArticleBottom />
    </>
  );
};

export default Single;
