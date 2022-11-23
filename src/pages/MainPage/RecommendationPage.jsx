import { GridListRecommendation } from "../Recommendation/grid";
import "./index.css";
import { MenuAppBar } from "../../componets/MenuAppBar";

export const RecommendationPage = () => {
  
  return (
    <div className="container">
      <MenuAppBar />
      <div className="container-card">
        <div className="card">
          <GridListRecommendation />
        </div>
      </div>
    </div>
  );
};
