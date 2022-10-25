import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const MainList = (props) => {
  return (
    <div>
      <Card sx={{ maxWidth: 500, backgroundColor: "#111" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={props.list_data.movie_img}
        />
        <CardContent>
          <Typography
            gutterBottom
            component="div"
            color="white"
            padding="1rem"
            align="center"
            style={{ height: "70px" }}
          >
          {props.list_data.movie_info.movies.series_title}
          </Typography>
          <Typography variant="body2" color="white" style={{ height: "10px" }}>
            IMDB Rating: {props.list_data.movie_info.movies.imdb_rating}
          </Typography>
        </CardContent>
        <CardActions>
          <button type="submit" className="login-form-btn">
            Details
          </button>
        </CardActions>
      </Card>
    </div>
  );
};
