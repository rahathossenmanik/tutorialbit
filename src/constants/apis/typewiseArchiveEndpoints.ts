export const TYPEWISE_ARCHIVE_ENDPOINTS = {
  posts: (page: number) => `/wp-json/wp/v2/posts?per_page=5&page=${page}`,
  postBySlug: () => `/wp-json/wp/v2/posts`,
  categoryBySlug: () => `/wp-json/wp/v2/categories`,
  postsByCategory: (page: number, category: number) =>
    `/wp-json/wp/v2/posts?categories=${category}&per_page=5&page=${page}`,
};
