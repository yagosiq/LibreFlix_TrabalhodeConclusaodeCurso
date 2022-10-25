import { MainCard } from ".";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularIndeterminate from "./loading";

export const GridMovie = () => {
  const [movies, setMovies] = useState([]);
  const [wanted_movie, setWanted_movie] = useState("");
  useEffect(() => {
    axios
      .get("http://localhost:3333/cold_start", {
        headers: { "Content-Type": "application/json" },
      })
      .then((res) => {
        localStorage.setItem("cold_start", res.data.movie_info);
        handleSetMovies(res.data.movie_info);
      });
  }, [movies]);

  const handleSetMovies = (movie) => {
    if (movies.length === 0) setMovies({ ...movie });
  };

  const handleSearchMovie = async (wanted_movie) => {
    setMovies("")
    await axios
      .post(
        "http://localhost:3333/content_based",
        { movie_name: wanted_movie },
        { headers: { "Content-Type": "application/json" } }
      )
      .then((res) => {
        if (res) {
          setMovies(res.data.movies_info);
        }
      })
      .catch((err) => {
        console.log(err);
      });
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
        {
          movies && wanted_movie && (
            <Grid item xs={12} color="white">
              Results for: {wanted_movie}
            </Grid>
          )
        }
        {
          movies.length === 0 &&
            <Grid item xs={12} align="center">
              <CircularIndeterminate />
            </Grid>
        }
        {Object.values(movies).map((movie, i) => {
          console.log(movie)
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
