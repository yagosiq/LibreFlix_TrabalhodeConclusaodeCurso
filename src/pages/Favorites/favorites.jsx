import { useEffect, useState } from "react"
import './favorites.css'
import * as React from "react";
import { MainCard } from "../MainCard";
import Grid from "@mui/material/Grid";
import axios from "axios";

export const Favorites = () => {
    const [movies, setMovies] = useState([])
    useEffect(()=>{
        const minhaLista = localStorage.getItem("@libreflix");
        setMovies(JSON.parse(minhaLista) || [])
    }, [])
    return(
        <Grid container spacing={3} align="center">
            <Grid item xs={11}>
                <h1>Favorites</h1>
             </Grid>

             {Object.values(movies).map((movie, index) => {
                return(
                    <Grid item key={index} xs={3}>
                    <MainCard movie_data={movie} />
                  </Grid>
                )
            })}
        </Grid>
    )
}
export default Favorites;