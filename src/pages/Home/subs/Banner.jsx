import React from "react";
import banner1 from "../../../assets/img/home-5/banner-img-1.png";
import banner2 from "../../../assets/img/home-5/banner-img-2.png";
import banner3 from "../../../assets/img/home-5/banner-img-3.png";

function Banner() {
    return (
        <>
            <section class="banner-area-6">
                <div class="container">
                    <div class="row ">
                        <div class="col-lg-7">
                            <div
                                class="banner-content wow fadeInRight"
                                data-wow-delay="0.2s"
                                style={{
                                    visibility: "visible",
                                    animationDelay: "0.2s",
                                    animationName: "fadeInRight",
                                }}
                            >
                                <h1>Your loan, your way. Better than banks.</h1>
                                <p>
                                    Faster and Higher approval rates!
                                    <br /> Get loans faster here
                                </p>
                                <div class="d-flex flex-column flex-sm-row mt-25 subscribe-field">
                                    <input
                                        type="email"
                                        class="form-control me-sm-1"
                                        placeholder="Enter Email address"
                                    />
                                    <a
                                        href="#"
                                        class="input-append theme-btn theme-btn-lg ms-sm-2"
                                    >
                                        Get Started
                                    </a>
                                </div>
                                <ul class="list-unstyled feature-list">
                                    <li>
                                        <i class="fas fa-check-circle"></i> No
                                        Spamming
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="col-lg-5 text-center text-lg-start">
                            <div class="banner-img">
                                <img
                                    class="img-1 wow fadeInLeft"
                                    data-wow-delay="0.3s"
                                    src={banner1}
                                    alt=""
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.3s",
                                        animationName: " fadeInLeft",
                                    }}
                                />
                                <img
                                    class="img-2 wow fadeInRight"
                                    data-wow-delay="0.8s"
                                    src={banner2}
                                    alt=""
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "0.8s",
                                        animationName: " fadeInRight",
                                    }}
                                />
                                <img
                                    class="img-3 wow fadeInRight"
                                    data-wow-delay="1.1s"
                                    src={banner3}
                                    alt=""
                                    style={{
                                        visibility: "visible",
                                        animationDelay: "1.1s",
                                        animationName: " fadeInRight",
                                    }}
                                />
                                <img
                                    class="img-shape"
                                    src="img/home-5/banner-shape.png"
                                    alt=""
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Banner;
