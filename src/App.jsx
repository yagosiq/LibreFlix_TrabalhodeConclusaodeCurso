import { AppRouter } from "./routes";
import "./styles.css";
import "./assets/global.css"
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export const App = () => {
  return (
    <><AppRouter /><ToastContainer autoClose={3000} /></>
  );
}
