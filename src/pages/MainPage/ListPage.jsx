import { GridList } from "../List/grid";
import "./index.css";
import { MenuAppBar } from "../../componets/MenuAppBar";

export const ListPage = () => {
  
  return (
    <div className="container">
      <MenuAppBar />
      <div className="container-card">
        <div className="card">
          <GridList />
        </div>
      </div>
    </div>
  );
};
