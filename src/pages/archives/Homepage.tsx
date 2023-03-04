import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from '../../constants/apis/typewiseArchiveEndpoints';
import { IPost } from '../../interfaces/IPost';
import LoadingPage from '../common/LoadingPage';
import Archive from './../../components/Archive';

const Homepage = () => {
  const { page } = useParams();
  const [loading, setLoading] = useState<boolean>(true);
  const [posts, setPosts] = useState<IPost[]>([]);
  const [currentPage, setCurrentPage] = useState<number>(Number(page) || 1);
  const [totalRows, setTotalRows] = useState<number>(0);
  const pathExceptPage = '/page/';

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          process.env.REACT_APP_BASE_URL +
            TYPEWISE_ARCHIVE_ENDPOINTS.posts(currentPage)
        );
        const data = await res.json();
        const totalRows = res.headers.get('x-wp-total');
        setPosts(data);
        setTotalRows(Number(totalRows));
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchPosts();
  }, [currentPage]);

  document.title = 'Home - Tutorial Bit';
  return loading ? (
    <LoadingPage />
  ) : (
    <>
      <Archive
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
        totalRows={totalRows}
        posts={posts}
        pathExceptPage={pathExceptPage}
      />
    </>
  );
};

export default Homepage;
