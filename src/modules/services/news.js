import { GET } from "./";

const NEWS_CONTEXT = "news";

const NewsService = {
  get: (count, set) => {
    GET(NEWS_CONTEXT, { params: { count } }).then((response) => {
      console.log(response);
      set(
        response.data && response.data.appnews
          ? response.data.appnews.newsitems
          : []
      );
    });
  },
};

export default NewsService;
