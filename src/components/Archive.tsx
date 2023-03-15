import React from 'react';
import { Pagination, PaginationProps } from 'antd';
import {
  LeftOutlined,
  RightOutlined,
  DoubleLeftOutlined,
  DoubleRightOutlined,
} from '@ant-design/icons';
import { IPost } from './../interfaces/IPost';
import Media from './Media';
import InFeedGlobal from '../ads/InFeedGlobal';

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
      return <a href={pathExceptPage + current}>{getContent()}</a>;
    },
    total: totalRows,
    current: currentPage,
    pageSize: 5,
    showSizeChanger: false,
  };

  return (
    <>
      <div className='row'>
        {posts?.map((post, i) => (
          <>
            {i % 2 === 0 ? (
              <div className='col-12 col-sm-6 py-3' key={i}>
                <InFeedGlobal />
              </div>
            ) : null}
            <div className='col-12 col-sm-6 py-3' key={i}>
              <div className='card' style={{ height: '100%', width: '100%' }}>
                <div
                  className='bg-image hover-overlay ripple'
                  data-mdb-ripple-color='light'>
                  <Media id={post?.featured_media} parent={post?.id} />
                  <a href='#!'>
                    <div
                      className='mask'
                      style={{
                        backgroundColor: 'rgba(251, 251, 251, 0.15)',
                      }}></div>
                  </a>
                </div>
                <div className='card-body'>
                  <h5
                    className='card-title'
                    dangerouslySetInnerHTML={{
                      __html: post?.title?.rendered,
                    }}></h5>
                  <div
                    className='card-text'
                    dangerouslySetInnerHTML={{
                      __html: post?.excerpt?.rendered?.replace(
                        ' [&hellip;]',
                        '...'
                      ),
                    }}></div>
                  <a href={post.link}>
                    <button type='button' className='btn btn-primary'>
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </>
        ))}
      </div>
      <Pagination {...pagination} />
    </>
  );
};

export default Archive;
