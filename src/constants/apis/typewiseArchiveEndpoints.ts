export const TYPEWISE_ARCHIVE_ENDPOINTS = {
  categories: () => `/wp-json/wp/v2/categories?per_page=50`,
  postBySlug: () => `/wp-json/wp/v2/posts`,
  aboutPage: () => `/wp-json/wp/v2/pages`,
  // mediaById: () => `/wp-json/wp/v2/media??per_page=2&page=1`,
};
