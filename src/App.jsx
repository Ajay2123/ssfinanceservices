import React, { useState, useEffect } from "react";
import { BrowserRouter as Routes } from "react-router-dom";
import AppRoutes from "./routes";
import "font-awesome/css/font-awesome.min.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader"; // Import the Preloader component

function App() {
    const [isLoading, setIsLoading] = useState(true);

    // Trigger preloader fade-out when the window has loaded
    useEffect(() => {
        const handleWindowLoad = () => {
            setTimeout(() => {
                setIsLoading(false);
            }, 100000); // Delay before removing the preloader
        };

        window.addEventListener("load", handleWindowLoad);

        return () => {
            window.removeEventListener("load", handleWindowLoad);
        };
    }, []);

    return (
        <>
            {/* Conditionally render the Preloader */}
            {isLoading && <Preloader />}

            <Routes>
                <Navbar />
                <AppRoutes />
                <Footer />
            </Routes>
        </>
    );
}

export default App;
