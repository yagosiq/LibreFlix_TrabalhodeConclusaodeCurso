import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import { useState } from "react";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export const MainCard = (props) => {
  // console.log(props)
  return (
    <div>
      <Card sx={{ maxWidth: 500, backgroundColor: "#111" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={props.movie_data[2]}
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
            Rating: {props.movie_data[0]}
          </Typography>
          <Typography variant="body2" color="white" style={{ height: "10px" }}>
            Title: {props.movie_data[1]}
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