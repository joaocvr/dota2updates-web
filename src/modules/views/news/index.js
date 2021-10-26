import * as React from "react";
import { useState, useEffect } from "react";
import parse from "html-react-parser";
import moment from "moment";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import NewsService from "../../services/news";

function MediaCard({
  data: { author, contents, date, feedlabel, is_external_url, title, url },
}) {
  return (
    <Card
      sx={{
        marginLeft: 20,
        marginRight: 20,
        marginTop: 5,
        marginBotton: 5,
        border: "3px",
      }}
    >
      <CardContent>
        <Typography gutterBottom variant="h4" component="div">
          {moment.unix(date).format("DD/MM/YYYY")} - {feedlabel}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        {parse(contents)}
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
  const [news, setNews] = useState([]);

  useEffect(() => NewsService.get(1, setNews), []);

  return news.map((n) => <MediaCard key={n.gid} data={n} />);
}

export default News;
