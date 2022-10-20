import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { toast } from "react-toastify";



export const MainCard = (props) => {

  function salvarFilme() {
    const minhaLista = localStorage.getItem("@libreflix");
  
    let filmesSalvos = JSON.parse(minhaLista) || [];
  
    const hasFilmes = filmesSalvos.some( (filmeSalvo) => filmeSalvo.movie_data === props.movie_data)
  
    if (hasFilmes) {
     toast.warn("Este filme já esta na sua lista");
      return;
    }
  
    filmesSalvos.push(props.movie_data);
    localStorage.setItem("@libreflix", JSON.stringify(filmesSalvos));
    toast.success("Filme salvo com sucesso")
    }




  return (
    <div>
      <Card sx={{ maxWidth: 500, backgroundColor: "#111" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="400"
          image={props.movie_data.movie_img}
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
            Title: {props.movie_data.movie_info.series_title}
          </Typography>
          <Typography variant="body2" color="white" style={{ height: "10px" }}>
            Rating: {props.movie_data.movie_info.imdb_rating}
          </Typography>

          <br />

          <CardActions>
            <button type="submit" className="login-form-btn">
              Details
            </button>
            <button onClick={salvarFilme} className="login-form-btn">
              +Favorites
            </button>
          </CardActions>
        </CardContent>

      </Card>
    </div>
  );
};
