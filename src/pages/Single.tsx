import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { get } from '../helpers/api_helpers';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from './../constants/apis/typewiseArchiveEndpoints';
import { IPost } from './../interfaces/IPost';
import LoadingPage from './common/LoadingPage';

const Single = () => {
  const { slug } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>();

  useEffect(() => {
    const fetchBySlug = async () => {
      try {
        const res = await get(process.env.REACT_APP_BASE_URL + TYPEWISE_ARCHIVE_ENDPOINTS.postBySlug(), {
          params: { slug: slug }
        });
        if (res.length === 1) setPost(res[0]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchBySlug();
  }, [slug]);

  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <h1
        dangerouslySetInnerHTML={{
          __html: post?.title?.rendered || ''
        }}></h1>
      <div
        dangerouslySetInnerHTML={{
          __html: post?.content?.rendered || ''
        }}></div>
    </>
  );
};

export default Single;
