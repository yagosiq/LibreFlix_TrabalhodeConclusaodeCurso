import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Box from "@mui/material/Box";

export const MainCard = (props) => {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };

  return (
    <div>
      <Card sx={{ maxWidth: 500, backgroundColor: "#111" }}>
        <CardMedia
          component="img"
          alt={props.movie_data.movie_info.series_title}
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
            {props.movie_data.movie_info.series_title}
          </Typography>
          <Typography variant="body2" color="white" style={{ height: "10px" }}>
            IMDB Rating: {props.movie_data.movie_info.imdb_rating}
          </Typography>
        </CardContent>
        <CardActions>
          <button type="button" onClick={handleOpen} className="login-form-btn">
            Details
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
              <Typography id="modal-modal-title" variant="h6" component="h2">
                {props.movie_data.movie_info.series_title}
              </Typography>
              <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
              </Typography>
            </Box>
          </Modal>
        </div>
      )}
    </div>
  );
};
