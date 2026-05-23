import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/home";
import IA from "./pages/ia/ia";
import Iot from "./pages/iot/iot";
import Operational from "./pages/operational/operational";

export default function RoutesApp() {
    return (
        <BrowserRouter>
            <Routes>

                <Route path="/" element={<Home />} />
                <Route path="/ia" element={<IA />} />
                <Route path="/iot" element={<Iot />} />
                <Route path="/operational" element={<Operational />} />

            </Routes>
        </BrowserRouter>
    )
}