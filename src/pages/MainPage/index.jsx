import { GridMovie } from "../MainCard/grid";
import "./index.css";
import { MenuAppBar } from "../../componets/MenuAppBar";
import { useState } from "react";

export const MainPage = () => {
  
  const [movie, setMovie] = useState("");
  return (
    <div className="container">
      <MenuAppBar />
      <div className="container-card">
        <div className="card">
          <GridMovie />
        </div>
      </div>
    </div>
  );
};
