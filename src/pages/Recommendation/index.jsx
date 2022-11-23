import React, { useState, useEffect } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const MainListRecommendation = (props) => {
  console.log(props.recommendation);
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const notify = (msg) => toast(msg);

  const handleAddMovieToRec = async () => {
    await axios
      .post(
        "http://localhost:3333/list",
        JSON.stringify({
          id_movie: props.recommendation.movie_info.id_program,
        }),
        {
          headers: {
            authorization: "bearer " + localStorage.getItem("token"),
            "Content-Type": "application/json",
          },
        }
      )
      .then((response) => {
        notify(response.data.message);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const style = {
    position: "absolute",
    top: "50%",
    color: "white",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "black",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Card sx={{ maxWidth: 500, backgroundColor: "#111" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={props.recommendation.movie_img}
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
            {props.recommendation.movie_info.series_title}
          </Typography>
          <Typography variant="body2" color="white" style={{ height: "10px" }}>
            IMDB Rating: {props.recommendation.movie_info.imdb_rating}
          </Typography>
        </CardContent>
        <CardActions>
          <button type="button" onClick={handleOpen} className="login-form-btn">
            Details
          </button>
          {localStorage.getItem("token") && (
            <button
              type="button"
              onClick={handleAddMovieToRec}
              className="login-form-btn"
            >
              Listar
              <ToastContainer theme="dark" position="bottom-right" />
            </button>
          )}
        </CardActions>
      </Card>
      {open && (
        <div>
          <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
          >
            <Box sx={style}>
              <Grid container spacing={3}>
                <Grid item xs={3} color="white">
                  <Card sx={{ maxWidth: 200 }}>
                    <CardMedia
                      component="img"
                      alt="green iguana"
                      height="400"
                      image={props.recommendation.movie_img}
                    />
                  </Card>
                </Grid>
                <Grid item xs={9} color="white">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Description:</b> {props.recommendation.movie_info.overview}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Genre:</b> {props.recommendation.movie_info.genre}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Director:</b> {props.recommendation.movie_info.director}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Stars:</b> {props.recommendation.movie_info.star1}, {props.recommendation.movie_info.star2}
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};
