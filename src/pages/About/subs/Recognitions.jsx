import React, { useState } from "react";
import award from "../../../assets/img/bank/award.jpg";

const recognitionData = [
    {
        year: "2020",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
    {
        year: "2019",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
    {
        year: "2018",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
    {
        year: "2017",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
    {
        year: "2016",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
    {
        year: "2015",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
    {
        year: "2014 and before",
        content: [
            "The First Mauritian Bank to join the GRI Community",
            "Instant account opening with a Customer On-boarding App",
        ],
    },
];

const Recognitions = () => {
    const [activeTab, setActiveTab] = useState("2020");

    const handleTabClick = (event, tabId) => {
        event.preventDefault();
        setActiveTab(tabId);
    };

    return (
        <section className="recognition-area bg_white pt-135 pb-140">
            <div className="container">
                <div className="section-title text-start">
                    <span className="short-title mt-0 wow fadeInUp">
                        Recognition
                    </span>
                    <h2 className="mb-0 wow fadeInUp" data-wow-delay="0.2s">
                        Milestones and Accolades
                    </h2>
                </div>

                <div className="recognition-widget pt-70">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-lg-3 col-5">
                            <div
                                className="widget-navigation wow fadeInUp pe-lg-4"
                                data-wow-delay="0.1s"
                            >
                                <ul
                                    className="nav nav-tabs"
                                    id="myTab"
                                    role="tablist"
                                >
                                    {recognitionData.map((item) => (
                                        <li
                                            key={item.year}
                                            className="nav-item"
                                            role="presentation"
                                        >
                                            <a
                                                href={`#${item.year}`}
                                                className={`nav-link ${
                                                    activeTab === item.year
                                                        ? "active"
                                                        : ""
                                                }`}
                                                id={`${item.year}-tab`}
                                                data-bs-toggle="tab"
                                                onClick={(event) =>
                                                    handleTabClick(
                                                        event,
                                                        item.year
                                                    )
                                                }
                                                role="tab"
                                                aria-controls={item.year}
                                                aria-selected={
                                                    activeTab === item.year
                                                        ? "true"
                                                        : "false"
                                                }
                                            >
                                                {item.year}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="col-lg-4 col-7">
                            <div
                                className="tab-content wow fadeInUp"
                                data-wow-delay="0.3s"
                                id="myTabContent"
                            >
                                {recognitionData.map((item) => (
                                    <div
                                        key={item.year}
                                        className={`tab-pane fade ${
                                            activeTab === item.year
                                                ? "show active"
                                                : ""
                                        }`}
                                        id={item.year}
                                        role="tabpanel"
                                        aria-labelledby={`${item.year}-tab`}
                                    >
                                        <h3>{item.year}</h3>
                                        {item.content.map((text, index) => (
                                            <p key={index}>{text}</p>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="col-xl-4 col-lg-5 offset-xl-1 pr-lg-35 pl-lg-35">
                            <div
                                className="accolades-widget wow fadeInUp"
                                data-wow-delay="0.5s"
                            >
                                <div className="accolades-header d-flex justify-content-between align-items-end">
                                    <h2>Awards</h2>
                                </div>
                                <div className="accolades-content">
                                    <ul>
                                        <li>
                                            <p className="subtitle">
                                                CITI BANK
                                            </p>
                                            <p className="text">
                                                Straight-Through processing
                                                (STP) Excellence Award
                                            </p>
                                        </li>
                                        <li className="mt-3">
                                            <p className="subtitle">
                                                MARCOM AWARDS
                                            </p>
                                            <p className="text">
                                                Platinum Winner for ‘The
                                                Believers’ Campaign
                                            </p>
                                        </li>
                                        <li className="mt-3">
                                            <p className="subtitle">
                                                BURJ CEO AWARDS
                                            </p>
                                            <p className="text">
                                                Most Innovative Bank in
                                                Mauritius
                                            </p>
                                        </li>
                                        <li className="mt-3">
                                            <p className="subtitle">
                                                GLOBAL BRANDS MAGAZINE
                                            </p>
                                            <p className="text">
                                                Most Innovative Treasury
                                                Services
                                            </p>
                                            <p className="text">
                                                Best Banking Brand in Mauritius
                                            </p>
                                            <p className="text">
                                                Best Credit Card Rewards Program
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recognitions;
