import { MainList } from ".";
import Grid from "@mui/material/Grid";
import React, { useState, useEffect } from "react";
import axios from "axios";
import CircularIndeterminate from "../MainCard/loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const GridList = () => {
  const [lists, setLists] = useState([]);
  useEffect(() => {
    if(localStorage.getItem('removed_movie')) handleNotify()
    handleGetList()
  });

  const notify = () => toast(localStorage.getItem('removed_movie') + 'has been removed from the list');

  const handleNotify = () => {
    notify()
    localStorage.removeItem('removed_movie')
  }

  const handleGetList = async () => {
    await axios
      .get("http://localhost:3333/list", {
        headers: {
          authorization: "Bearer " + localStorage.getItem("token"),
        },
      })
      .then((res) => {
        handleSetList(res.data.list);
      });
  };

  const handleSetList = (list) => {
    if (lists.length === 0) setLists({ ...list });
  };

  return (
    <div>
      <ToastContainer theme="dark" position="bottom-right"/>
      <Grid container spacing={3} align="center">
        <Grid item xs={12} color="white">
          <h1>Your list</h1>
        </Grid>
        {lists.length === 0 && (
          <Grid item xs={12} align="center">
            <CircularIndeterminate />
          </Grid>
        )}
        {Object.values(lists).map((list, i) => {
          return (
            <Grid item xs={3}>
              <MainList list_data={list} handleGetList={handleGetList} setLists={setLists}/>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};
