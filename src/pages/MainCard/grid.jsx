import { MainCard } from "../MainCard";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import axios from "axios";

export const GridMovie = () => {
  const [movies, setMovies] = useState([]);
  const [wanted_movie, setWanted_movie] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3333/cold_start", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        handleSetMovies(res.data.movie_info);
      });
  }, [movies]);

  const handleSetMovies = (movie) => {
    if (movies.length === 0) setMovies({ ...movie });
  };

  const handleSetWanted_movies = (movie) => {
    if (movies.length === 0) setWanted_movie({movie});
  };

  const handleSearchMovie = async (wanted_movie) => {
    if(wanted_movie === '') {
      return
    }
    await axios.post('http://localhost:3333/content_based', { movie_name: wanted_movie }, {headers: { 'Content-Type': 'application/json'}})
    .then(res => {
      console.log(res)
      if(res) {
        setMovies(res.data.movies)
      }
    }).catch((err) => {
      console.log(err)
    })
  };

  return (
    <div>
      <Grid container spacing={3} align="center">
        <Grid item xs={11}>
          <div className="wrap-input">
            <input
              className={wanted_movie !== "" ? "has-val input" : "input"}
              type="text"
              value={wanted_movie}
              onChange={(e) => setWanted_movie(e.target.value)}
            />
            <span
              className="focus-input"
              data-placeholder="Search for a movie"
            ></span>
          </div>
        </Grid>
        <Grid item xs={1}>
          <div className="container-login-form-btn">
            <button
              type="button"
              className="login-form-btn"
              onClick={() => handleSearchMovie(wanted_movie)}
            >
              Go
            </button>
          </div>
        </Grid>
        {Object.values(movies).map((movie, i) => {
          return (
            <Grid item xs={3}>
              <MainCard movie_data={movie} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
