import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Movie } from "@mui/icons-material";

function salvarFilme(){
  const minhaLista = localStorage.getItem("@libreflix");

  let filmesSalvos = JSON.parse(minhaLista) || [];
  
  const hasFilmes = filmesSalvos.some( (filmeSalvo) => filmeSalvo.id === Movie.id) 

  if(hasFilmes){
    alert("Este filme ja esta na sua lista");
    return;
  }

  filmesSalvos.push(Movie);
  localStorage.setItem("@libreflix", JSON.stringfy(filmesSalvos));
  alert("Filme salvo com sucesso")
}

export const MainCard = (props) => {
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
            Title: {props.movie_data[0]}
          </Typography>
          <Typography variant="body2" color="white" style={{ height: "10px" }}>
            Rating: {props.movie_data[1]}
          </Typography>
        </CardContent>
        <CardActions>
          <button type="submit" className="login-form-btn">
            Details
          </button>
          <br />
          <button onClick={salvarFilme} className="login-form-btn">
            Favoritos
          </button>
        </CardActions>
      </Card>
    </div>
  );
};
