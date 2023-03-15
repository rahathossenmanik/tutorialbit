import React, { useEffect } from 'react';

const InFeedGlobal = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-format='fluid'
        data-ad-layout-key='-5g+cc-n-6k+r8'
        data-ad-client='ca-pub-6705737578975548'
        data-ad-slot='5579751233'></ins>
    </>
  );
};

export default InFeedGlobal;
