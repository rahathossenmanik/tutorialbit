import { Divider } from 'antd';
import React, { useEffect } from 'react';

const RightSidebar = () => {
  useEffect(() => {
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
    (window.adsbygoogle = window.adsbygoogle || []).push({});
  }, []);

  return (
    <>
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-6705737578975548'
        data-ad-slot='1282244150'
        data-ad-format='auto'
        data-full-width-responsive='true'></ins>
      <Divider />
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-6705737578975548'
        data-ad-slot='2999215158'
        data-ad-format='auto'
        data-full-width-responsive='true'></ins>
      <Divider />
      <ins
        className='adsbygoogle'
        style={{ display: 'block' }}
        data-ad-client='ca-pub-6705737578975548'
        data-ad-slot='3011092941'
        data-ad-format='auto'
        data-full-width-responsive='true'></ins>
    </>
  );
};

export default RightSidebar;
