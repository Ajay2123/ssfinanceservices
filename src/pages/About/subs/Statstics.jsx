import React from "react";
import CounterUp from "../../../components/CounterUp";
import StockMarket from "../../../assets/img/statistics/img.png";
import img1 from "../../../assets/img/statistics/img-1.png";
import img2 from "../../../assets/img/statistics/img-2.png";
import img6 from "../../../assets/img/statistics/img-6.png";

export default function Statstics() {
    return (
        <div>
            <section className="statistics-area pt-135 pb-140 bg_disable">
                <div className="container">
                    <div className="row gy-lg-0 gy-4">
                        <div className="col-lg-7">
                            <div className="statistics-widget-2 wow fadeInUp">
                                <div className="row gx-0">
                                    <div className="col-7">
                                        <div className="statistics-slider h-100">
                                            <div className="widget-content widget-1">
                                                <h1 className="stat-counter">
                                                    <CounterUp
                                                        value="12,345"
                                                        duration={1000}
                                                        delay={20}
                                                    />
                                                </h1>
                                                <p>
                                                    We employ 15,000 people
                                                    around the world
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-5">
                                        <img
                                            className="img-fluid h-100"
                                            src={img1}
                                            alt="img"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div
                                className="statistics-widget-2 wow fadeInUp"
                                data-wow-delay="0.2s"
                            >
                                <div className="widget-content widget-2">
                                    <h1 className="stat-counter">
                                        <CounterUp
                                            value="125"
                                            duration={1000}
                                            delay={20}
                                        />
                                    </h1>
                                    <p>
                                        Our colleagues come from 125 different
                                        countries
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row pt-30 pb-30 gy-4 gy-lg-0">
                        <div className="col-lg-7">
                            <div className="row gy-4 gy-lg-0">
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="statistics-widget-2 wow fadeInRight"
                                        data-wow-delay="0.1s"
                                    >
                                        <div className="widget-content widget-3">
                                            <h1 className="stat-counter">
                                                <CounterUp
                                                    value="75"
                                                    duration={1000}
                                                    delay={20}
                                                />
                                            </h1>
                                            <p>
                                                More than 75 years in business
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6">
                                    <div
                                        className="statistics-widget-2 wow fadeInRight"
                                        data-wow-delay="0.3s"
                                    >
                                        <div className="widget-content widget-4">
                                            <h1 className="stat-counter">
                                                <CounterUp
                                                    value="450"
                                                    duration={1000}
                                                    delay={20}
                                                />
                                            </h1>
                                            <p>450 branches worldwide</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4">
                                    <div
                                        className="statistics-widget-2 wow fadeInRight"
                                        data-wow-delay="0.5s"
                                    >
                                        <div className="widget-content widget-5">
                                            <h1 className="stat-counter">
                                                <CounterUp
                                                    value="25"
                                                    duration={1000}
                                                    delay={20}
                                                />
                                            </h1>
                                            <p>We are present in 25 markets</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div
                                className="statistics-widget-2 wow fadeInRight"
                                data-wow-delay="0.7s"
                            >
                                <div
                                    className="widget-content widget-6"
                                    style={{
                                        backgroundImage: `url(${img2})`,
                                    }}
                                >
                                    <h2>Best Consumer Digital Bank</h2>
                                    <p>Global Finance 2020</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row gy-4 gy-md-0">
                        <div className="col-md-5">
                            <div
                                className="statistics-widget-2 wow fadeInLeft"
                                data-wow-delay="0.1s"
                            >
                                <div
                                    className="widget-content widget-7"
                                    style={{
                                        backgroundImage: `url(${StockMarket})`,
                                    }}
                                >
                                    <h1 className="stat-counter">
                                        <CounterUp
                                            value="35"
                                            duration={1000}
                                            delay={20}
                                        />
                                    </h1>
                                    <p>Global Finance 2020</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-7">
                            <div
                                className="statistics-widget-2 wow fadeInLeft"
                                data-wow-delay="0.3s"
                            >
                                <div className="row gx-0">
                                    <div className="col-5">
                                        <img
                                            className="img-fluid"
                                            src={img6}
                                            alt="img"
                                        />
                                    </div>
                                    <div className="col-7">
                                        <div className="widget-content widget-8">
                                            <h1 className="stat-counter">
                                                <CounterUp
                                                    value="2"
                                                    duration={1000}
                                                    delay={20}
                                                />
                                            </h1>
                                            <p>
                                                We’re listed on two of Asia’s
                                                largest stock exchanges
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
