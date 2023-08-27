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

  document.title = (post?.title?.rendered || 'Post') + ' - Tutorial Bit';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        <header className="mb-4 lg:mb-6 not-format">
          <h1
            className="mb-2 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl dark:text-white"
            dangerouslySetInnerHTML={{
              __html: post?.title?.rendered || ''
            }}></h1>
          <p className="text-base font-light text-gray-500 dark:text-gray-400">
            <time title="February 8th, 2022">{new Date(post?.date as Date)?.toDateString()}</time>
          </p>
        </header>
        <ArticleTop />
        <div
          className="single-post space-y-4 text-gray-800"
          dangerouslySetInnerHTML={{
            __html: post?.content?.rendered || ''
          }}></div>
        <ArticleBottom />
      </article>
    </>
  );
};

export default Single;
