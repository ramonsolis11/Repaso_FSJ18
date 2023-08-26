import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import {LandingPage} from "../pages/LandingPage";
import {MovieDetail} from "../pages/MovieDetail";

export function MyRoutes() {
    return (
        <Router>
            <Routes>
                <Routes>
                    <Route exact path="/" element={<LandingPage/>} />
                    <Route exact path="movies/:movieId" element={<MovieDetail/>} />
                </Routes>
            </Routes>
        </Router>
    );
}