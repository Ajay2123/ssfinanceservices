import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Contact from "./pages/Contact/Contact";
import NotFound from "./pages/NotFound";

export default function AppRoutes() {
    return (
        <>
            <Routes>
                {/* Both / and /home lead to Home */}
                <Route index element={<Home />} />
                <Route path="/home" element={<Home />} />

                {/* Standard Routes */}
                <Route path="/about" element={<About />} />
                <Route path="/services" element={<Services />} />
                <Route path="/contact" element={<Contact />} />

                {/* Catch-all route for 404 */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </>
    );
}
