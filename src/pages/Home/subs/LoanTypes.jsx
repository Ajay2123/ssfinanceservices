import React, { useState } from "react";
import freelanceTab2 from "../../../assets/img/home-4/freelance-tab-2.png";
import freelanceTab from "../../../assets/img/home-4/freelance-tab.png";

const LoanTypes = () => {
    const [activeTab, setActiveTab] = useState("homeLoan");

    const tabContent = {
        homeLoan: {
            heading: "Get your dream home",
            highlight: "banking",
            img: freelanceTab2,
        },
        personalLoan: {
            heading: "Manage your cash",
            highlight: "easily",
            img: freelanceTab2,
        },
        business: {
            heading: "Access to funding",
            highlight: "banking",
            img: freelanceTab,
        },
        micro_business: {
            heading: "Unlock your dreams",
            highlight: "easily",
            img: freelanceTab,
        },
    };

    return (
        <section className="about-tab-area bg-white">
            <div className="container">
                <ul className="nav nav-tabs" role="tablist">
                    {[
                        { id: "homeLoan", label: "Dream Home" },
                        { id: "personalLoan", label: "Personal Goals" },
                        { id: "business", label: "Business Founders" },
                        { id: "micro_business", label: "Micro businesses" },
                    ].map((tab) => (
                        <li
                            className="nav-item"
                            role="presentation"
                            key={tab.id}
                        >
                            <button
                                className={`nav-link ${
                                    activeTab === tab.id ? "active" : ""
                                }`}
                                id={`${tab.id}-tab`}
                                type="button"
                                role="tab"
                                aria-controls={tab.id}
                                aria-selected={activeTab === tab.id}
                                onClick={() => setActiveTab(tab.id)}
                            >
                                {tab.label}
                            </button>
                        </li>
                    ))}
                </ul>

                <div className="tab-content mt-4" id="myTabContent">
                    {Object.keys(tabContent).map((key) => (
                        <div
                            key={key}
                            className={`tab-pane fade ${
                                activeTab === key ? "show active" : ""
                            }`}
                            id={key}
                            role="tabpanel"
                            aria-labelledby={`${key}-tab`}
                        >
                            <div className="row align-items-center">
                                <div className="col-lg-5">
                                    <div className="section-title text-start">
                                        <h1>
                                            {tabContent[key].heading}{" "}
                                            <span className="underline-shape">
                                                {tabContent[key].highlight}
                                            </span>
                                        </h1>
                                        <p>
                                            Lorem Ipsum is simply dummy text of
                                            the printing and the typesetting
                                            industry. Lorem Ipsum has been
                                            industry's
                                        </p>
                                        <a className="read-more" href="#">
                                            Get started now{" "}
                                            <i className="arrow_right"></i>
                                        </a>
                                    </div>
                                </div>
                                <div className="col-lg-7">
                                    <img
                                        className="img-fluid"
                                        src={tabContent[key].img}
                                        alt=""
                                    />
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default LoanTypes;
