import React from "react";
import banner from "../../../assets/img/banner/house-protection-bank_1150-12959.jpg";

export default function Banner() {
    return (
        <>
            <section
                className="banner-area-2"
                style={{ backgroundImage: `url(${banner})` }}
            >
                <div className="container">
                    <div className="row align-items-center pt-130 pb-140">
                        <div className="col-xl-6 col-lg-8">
                            <div className="banner-content py-5">
                                <div className="section-title text-start">
                                    <span className="short-title wow fadeInUp">
                                        ABOUT US
                                    </span>
                                    <h1
                                        className="wow fadeInUp mb-0"
                                        data-wow-delay="0.2s"
                                    >
                                        Believing, banking and achieving
                                        different
                                    </h1>
                                </div>
                                <a
                                    className="theme-btn-2 theme-btn-primary mt-45 wow fadeInUp"
                                    data-wow-delay="0.4s"
                                    href="#"
                                >
                                    <span className="arrow">
                                        <span className="horizontal-line"></span>
                                    </span>
                                    View our 2019 Annual Report
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="bg_white pt-90 pb-160">
                <div className="container">
                    <div className="description-widget">
                        <div className="row">
                            <div className="col-md-4">
                                <div className="desc-title text-end bg_primary">
                                    <h2>
                                        A journey that started with a belief to
                                        Bank Different
                                    </h2>
                                </div>
                            </div>
                            <div className="col-md-8">
                                <div className="desc-text pl-lg-10">
                                    <p>
                                        ssfinancialservices journey started with
                                        a single belief to connect people,
                                        places and possibilities by doing things
                                        others said could not be done. Anchored
                                        on this belief, the Bank was founded in
                                        2017 and we are, to date, headquartered
                                        in the Mauritius International Financial
                                        Centre with a representative office in
                                        United States.
                                    </p>
                                    <p className="mt-20">
                                        ssfinancialservices core banking and
                                        transactional capabilities are also
                                        complemented. ssfinancialservices
                                        experienced team and its regional
                                        foundation are complemented by the
                                        belief and trust our clients have in our
                                        ability to connect them to a global
                                        banking network to seamlessly achieve
                                        their financial aspirations.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
