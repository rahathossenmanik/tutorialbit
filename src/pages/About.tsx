import React, { useEffect, useState } from 'react';
import { get } from '../helpers/api_helpers';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from './../constants/apis/typewiseArchiveEndpoints';
import { IPost } from './../interfaces/IPost';
import LoadingPage from './common/LoadingPage';

const About = () => {
  const [loading, setLoading] = useState<boolean>(true);
  const [aboutPage, setAboutPage] = useState<IPost>();

  useEffect(() => {
    const fetchAboutPage = async () => {
      try {
        const res = await get(
          process.env.REACT_APP_BASE_URL +
            TYPEWISE_ARCHIVE_ENDPOINTS.aboutPage(),
          {
            params: { slug: 'about-us' },
          }
        );
        if (res.length === 1) setAboutPage(res[0]);
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchAboutPage();
  }, []);

  document.title = 'About Us - CS-Drive';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <h1
        dangerouslySetInnerHTML={{
          __html: aboutPage?.title?.rendered || '',
        }}></h1>
      <div
        dangerouslySetInnerHTML={{
          __html: aboutPage?.content?.rendered || '',
        }}></div>
    </>
  );
};

export default About;
