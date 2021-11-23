import { GET } from "./";

const NEWS_CONTEXT = "/news";

const NewsService = {
  get: (count) => GET(NEWS_CONTEXT, { params: { count } }),
};

export default NewsService;
