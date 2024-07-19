const path = {
  home() {
    return "/";
  },

  showTopic(slug) {
    return `/topic/${slug}`;
  },
  createPost(slug) {
    return `/topic/${slug}/post/new`;
  },
  showPost(slug, postId) {
    return `/topic/${slug}/post/${postId}`;
  },
};

export default path;
