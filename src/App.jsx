import { BrowserRouter as Routes } from "react-router-dom";
import AppRoutes from "./routes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    return (
        <Routes>
            <Navbar />
            <AppRoutes />
            <Footer />
        </Routes>
    );
}

export default App;
