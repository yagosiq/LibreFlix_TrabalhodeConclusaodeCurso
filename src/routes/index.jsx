import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { Login } from "../pages/Login"
import { useState } from "react";
import { Register } from "../pages/Register"
import { MainPage } from "../pages/MainPage"
import { MainPageFavorites } from "../pages/Favorites"

export const AppRouter = () => {
    const [token_login, setToken_login] = useState("");
    return (
        <Router>
            <Routes>
            {/* <Route path="/" element={< />}/> */}
                <Route path="/login" element={<Login token = {setToken_login}/>}/>
                <Route path="/register" element={<Register />}/>
                <Route path="/" element={<MainPage />}/>
                <Route path="/favorites" element={<MainPageFavorites />}/>
            </Routes>
        </Router>
    )
}
