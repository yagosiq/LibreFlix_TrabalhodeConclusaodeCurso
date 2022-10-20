import { Favorites } from "./favorites";
import "./favorites.css";
import { MenuAppBar } from "../../componets/MenuAppBar";

export const MainPageFavorites = () => {
  
  return (
    <div className="container">
      <MenuAppBar />
      <div className="container-card">
        <div className="card">
          <Favorites />
        </div>
      </div>
    </div>
  );
};
