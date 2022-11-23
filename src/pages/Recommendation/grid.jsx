import { MainListRecommendation } from ".";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularIndeterminate from "../MainCard/loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GridListRecommendation = () => {
  const [rec, setRec] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/collaborative", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        console.log(res.data.recommendation)
        handleSetRec(res.data.recommendation);
      });
  });

  const handleSetRec = (recs) => {
    if (rec.length === 0) setRec(recs);
  };

  return (
    <div>
      <ToastContainer theme="dark" position="bottom-right"/>
      <Grid container spacing={3} align="center">
        <Grid item xs={12} color="white">
          <h1>Recomendados para você</h1>
        </Grid>
        {rec.length === 0 && (
          <Grid item xs={12} align="center">
            <CircularIndeterminate />
          </Grid>
        )}
        {Object.values(rec).map((recommendation, i) => {
          return (
            <Grid item xs={3}>
              <MainListRecommendation recommendation={recommendation} setRecs={setRec}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
