import { Spin } from 'antd';
import React, { useEffect, useState } from 'react';
import { TYPEWISE_ARCHIVE_ENDPOINTS } from '../constants/apis/typewiseArchiveEndpoints';
import { get } from '../helpers/api_helpers';
import { IMedia } from '../interfaces/IMedia';

const Media = (props: any) => {
  const { id, parent } = props;
  const [loading, setLoading] = useState<boolean>(true);
  const [media, setMedia] = useState<IMedia>();

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const medias = await get(
          process.env.REACT_APP_BASE_URL +
            TYPEWISE_ARCHIVE_ENDPOINTS.mediaById(),
          { params: { parent: parent } }
        );
        medias.forEach((media: IMedia) => {
          if (media?.id === id) setMedia(media);
        });
      } catch (error) {
        console.log(error);
      }
      setLoading(false);
    };
    fetchMedia();
  }, [id, parent]);

  return loading ? (
    <Spin />
  ) : (
    <>
      <img
        width={200}
        style={{ maxWidth: '100%' }}
        alt={media?.alt_text}
        src={media?.source_url}
      />
    </>
  );
};

export default Media;
