import React from "react";
import _404_three from "../assets/img/logo/Logo.png";

const Preloader = () => {
    return (
        <div id="preloader" className="preloader">
            <div id="ctn-preloader" className="ctn-preloader">
                <div className="round_spinner">
                    <div className="spinner"></div>
                    <div className="text">
                        <img src={_404_three} width="300" alt="Logo" />
                    </div>
                </div>
                <h2 className="head">Did You Know?</h2>
                <p>Some interesting fact or information goes here.</p>
            </div>
        </div>
    );
};

export default Preloader;
