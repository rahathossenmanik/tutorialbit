export interface IMedia {
  alt_text: string;
  author: number;
  caption: { rendered: string };
  comment_status: string;
  date: Date;
  date_gmt: Date;
  description: { rendered: string };
  guid: { rendered: string };
  id: number;
  jetpack_sharing_enabled: boolean;
  jetpack_shortlink: string;
  link: string;
  media_details: {
    width: number;
    height: number;
    file: string;
    filesize: number;
    sizes: {
      thumbnail: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      medium: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      medium_large: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      large: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
      full: {
        file: string;
        width: number;
        height: number;
        mime_type: string;
        source_url: string;
      };
    };
    image_meta: {
      aperture: string;
      credit: string;
      camera: string;
      caption: string;
      created_timestamp: string;
    };
  };
  media_type: string;
  meta: {
    advanced_seo_description: string;
    jetpack_seo_html_title: string;
    jetpack_seo_noindex: boolean;
    jetpack_post_was_ever_published: boolean;
  };
  mime_type: string;
  modified: Date;
  modified_gmt: Date;
  ping_status: string;
  post: number;
  slug: string;
  source_url: string;
  status: string;
  template: string;
  title: { rendered: string };
  type: string;
  _links: {
    self: Array<{ href: string }>;
    collection: Array<{ href: string }>;
    about: Array<{ href: string }>;
    author: Array<{ embeddable: boolean; href: string }>;
    replies: Array<{ embeddable: boolean; href: string }>;
  };
}
