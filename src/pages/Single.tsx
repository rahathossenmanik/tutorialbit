import React, { useEffect, useState } from 'react';
import ArticleBottom from '../ads/ArticleBottom';
import ArticleTop from '../ads/ArticleTop';
import { get } from '../helpers/api_helpers';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from './../constants/apis/typewiseArchiveEndpoints';
import { IPost } from './../interfaces/IPost';
import LoadingPage from './common/LoadingPage';
import { left } from '../constants/json/left';
import { useLocation } from 'react-router-dom';

const Single = (props: any) => {
  const { slug } = props;
  const { pathname: path } = useLocation();
  const pathArray = path?.split('/');

  const [loading, setLoading] = useState<boolean>(true);
  const [post, setPost] = useState<IPost>();
  const [course, setCourse] = useState<string>('');
  const [previous, setPrevious] = useState<string>('');
  const [next, setNext] = useState<string>('');

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

  useEffect(() => {
    left.forEach((item) => {
      if (pathArray.includes(item.course)) {
        setCourse(item.course);
        const posts = item?.posts;
        posts?.forEach((post, i) => {
          if (slug === post.slug) {
            if (i > 0) setPrevious(posts[i - 1].slug);
            if (i < posts.length - 1) setNext(posts[i + 1].slug);
          }
        });
      }
    });
  }, [slug, pathArray]);

  document.title = (post?.title?.rendered || 'Post') + ' - CS-Drive ';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <article className='mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert'>
        <header className='mb-4 lg:mb-6 not-format'>
          <h1
            className='mb-2 text-3xl font-bold leading-tight text-gray-900 lg:text-4xl dark:text-white'
            dangerouslySetInnerHTML={{
              __html: post?.title?.rendered || '',
            }}></h1>
          <p className='text-base font-light text-gray-500 dark:text-gray-400'>
            <time title='February 8th, 2022'>
              {new Date(post?.date as Date)?.toDateString()}
            </time>
          </p>
        </header>
        <ArticleTop />
        <div
          className='single-post space-y-4 text-gray-800'
          dangerouslySetInnerHTML={{
            __html: post?.content?.rendered || '',
          }}></div>
        <ArticleBottom />
      </article>
      <div className='mt-8 flex justify-between'>
        <a
          href={previous ? '/' + course + '/' + previous : '/'}
          className='block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg'>
          {previous ? 'Back' : 'Home'}
        </a>
        <a
          href={next ? '/' + course + '/' + next : '/'}
          className='block py-2 px-4 text-white font-medium bg-indigo-600 duration-150 hover:bg-indigo-500 active:bg-indigo-700 rounded-lg'>
          {next ? 'Next' : 'Home'}
        </a>
      </div>
    </>
  );
};

export default Single;
