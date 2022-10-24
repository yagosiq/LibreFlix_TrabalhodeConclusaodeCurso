import { GridMovie } from "../MainCard/grid";
import "./index.css";
import { MenuAppBar } from "../../componets/MenuAppBar";

export const MainPage = () => {
  
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
