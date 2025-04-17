import React from "react";

import country1 from "../../../assets/img/home-5/country-1.png";
function Partners() {
    return (
        <section class="coverage-area">
            <div class="container">
                <div class="section-title">
                    <span class="short-title-2">Proudly</span>
                    <h1
                        class="wow fadeInUp"
                        style={{
                            visibility: "visible",
                            animationName: "fadeInUp",
                        }}
                    >
                        We are cooperating with:
                    </h1>
                </div>
                <div class="row mt-50 gy-xl-0 gy-4 text-center">
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                        <a
                            href="#"
                            class="country-widget wow fadeInLeft"
                            data-wow-delay="0.1s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.1s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <img src={country1} alt="country" />
                            <h5>Bajaj Finserv</h5>
                        </a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                        <a
                            href="#"
                            class="country-widget wow fadeInLeft"
                            data-wow-delay="0.3s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.3s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <img src={country1} alt="country" />
                            <h5>IDFC FIRST</h5>
                        </a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                        <a
                            href="#"
                            class="country-widget wow fadeInLeft"
                            data-wow-delay="0.5s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.5s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <img src={country1} alt="country" />
                            <h5>Edelweiss</h5>
                        </a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                        <a
                            href="#"
                            class="country-widget wow fadeInLeft"
                            data-wow-delay="0.7s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.7s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <img src={country1} alt="country" />
                            <h5>ICICI</h5>
                        </a>
                    </div>
                    <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                        <a
                            href="#"
                            class="country-widget wow fadeInLeft"
                            data-wow-delay="0.9s"
                            style={{
                                visibility: "visible",
                                animationDelay: "0.9s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <img src={country1} alt="country" />
                            <h5>HDFC</h5>
                        </a>
                    </div>

                    <div class="col-xl-2 col-lg-3 col-sm-4 col-6">
                        <a
                            href="#"
                            class="country-widget wow fadeInLeft"
                            data-wow-delay="1.1s"
                            style={{
                                visibility: "visible",
                                animationDelay: "1.1s",
                                animationName: "fadeInLeft",
                            }}
                        >
                            <img src={country1} alt="country" />
                            <h5>RBL </h5>
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Partners;
