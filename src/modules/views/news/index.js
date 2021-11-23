import * as React from "react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import moment from "moment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import NewsService from "../../services/news";
import Box from "@mui/material/Box";
import CircularProgress from "@mui/material/CircularProgress";

function MediaCard({
  key,
  data: { author, contents, date, feedlabel, is_external_url, title, url },
}) {
  return (
    <Card
      key={key}
      sx={{
        border: "1px solid",
        marginBottom: "40px",
        borderRadius: "10px",
        boxShadow: "3px 3px 5px rgb(0 0 0 / 40%)",
        backgroundColor: "rgb(0 0 0 / 2%)",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          <strong>
            {moment.unix(date).format("DD/MM/YYYY HH:MM:SS")} - {feedlabel}
          </strong>
        </Typography>
        <Divider sx={{ marginBottom: "10px" }} />
        <Typography gutterBottom variant="h5" component="div">
          <strong>{title}</strong>
        </Typography>
        {parse(contents)}
        <Divider sx={{ marginTop: "10px" }} />
        <Typography
          variant="body2"
          color="text.secondary"
          sx={{ paddingTop: "10px" }}
        >
          Author: {author}
        </Typography>
      </CardContent>
      <CardActions>
        {is_external_url && (
          <Button size="small" onClick={() => window.open(url)}>
            MORE
          </Button>
        )}
      </CardActions>
    </Card>
  );
}

function News() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(3);
  const [news, setNews] = useState([]);

  useEffect(
    () =>
      NewsService.get(count).then((response) => {
        setNews(
          response.data && response.data.appnews
            ? response.data.appnews.newsitems
            : []
        );
        setLoading(false);
      }),
    [count]
  );

  window.onscroll = () => {
    if (
      !loading &&
      window.innerHeight + window.scrollY >= document.body.offsetHeight - 100
    ) {
      setLoading(true);
      setCount(count + 1);
    }
  };

  return (
    <React.Fragment>
      {news.map((n) => (
        <MediaCard key={n.gid} data={n} />
      ))}
      {loading && (
        <Box
          id="progress"
          sx={{
            justifyContent: "center",
            position: "fixed",
            top: "40%",
            left: "50%",
          }}
        >
          <CircularProgress size={60} />
        </Box>
      )}
    </React.Fragment>
  );
}

export default News;
