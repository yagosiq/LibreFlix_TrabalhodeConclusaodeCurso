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

export const MainList = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  const notify = () => toast(props.list_data.movie_info.movies.series_title + 'has been removed from the list');

  const handleRemoveMovie = async () => {
    await axios
      .delete(
        'http://localhost:3333/list/' + props.list_data.movie_info.movies.id_program,
        {
          headers: {
          "authorization": "bearer " + localStorage.getItem("token"),
          "Content-Type": "application/json"
          }
        }
      )
      .then(() => {
        localStorage.setItem("removed_movie", props.list_data.movie_info.movies.series_title);
      })
      .then(() => {
        props.setLists([])
        props.handleGetList()
      })
  }

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
          <button type="button" onClick={handleOpen} className="login-form-btn">
            Details
          </button>
          <button type="button" onClick={handleRemoveMovie} className="login-form-btn">
            Remove
            <ToastContainer theme="dark" position="bottom-right"/>
          </button>
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
                      image={props.list_data.movie_img}
                    />
                  </Card>
                </Grid>
                <Grid item xs={9} color="white">
                  <Typography
                    id="modal-modal-title"
                    variant="h6"
                    component="h2"
                  >
                    {props.list_data.movie_info.movies.series_title}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Description:</b> {props.list_data.movie_info.movies.overview}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Genre:</b> {props.list_data.movie_info.movies.genre}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Director:</b> {props.list_data.movie_info.movies.director}
                  </Typography>
                  <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                    <b>Stars:</b> {props.list_data.movie_info.movies.star1}, {props.list_data.movie_info.movies.star2}
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
