import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CreateCV from "../pages/CreateCV";

function AppRoutes() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create-cv" element={<CreateCV />} />
        </Routes>
    );
}

export default AppRoutes;
