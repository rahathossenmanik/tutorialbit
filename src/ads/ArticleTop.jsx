import React, { useEffect } from 'react';

const ArticleTop = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <ins
        className='adsbygoogle'
        style={{ display: 'block', textAlign: 'center' }}
        data-ad-layout='in-article'
        data-ad-format='fluid'
        data-ad-client='ca-pub-6705737578975548'
        data-ad-slot='3088570834'></ins>
    </>
  );
};

export default ArticleTop;
