import React, { useEffect } from 'react';

const ArticleBottom = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-format='autorelaxed'
        data-ad-client='ca-pub-6705737578975548'
        data-ad-slot='9741609094'></ins>
    </>
  );
};

export default ArticleBottom;
