import { MainList } from ".";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularIndeterminate from "../MainCard/loading";

export const GridList = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3333/list", {
        headers: {
          "authorization": "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        handleSetList(res.data.list);
      });
  });

  const handleSetList = (list) => {
    if (lists.length === 0) setLists({ ...list });
  };

  return (
    <div>
      <Grid container spacing={3} align="center">
        <Grid item xs={12} color="white">
          <h1>Your list</h1>
        </Grid>
        {
          lists.length === 0 &&
            <Grid item xs={12} align="center">
              <CircularIndeterminate />
            </Grid>
        }
        {Object.values(lists).map((list, i) => {
          return (
            <Grid item xs={3}>
              <MainList list_data={list} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
