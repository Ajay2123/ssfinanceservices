import React from "react";
import { Link } from "react-router-dom";
import _404_bg from "../assets/img/error/_404_bg.png";
import _404_one from "../assets/img/error/_404_one.png";
import _404_two from "../assets/img/error/_404_two.png";
import _404_three from "../assets/img/error/_404_three.png";

export default function NotFound() {
    return (
        <>
            <main>
                <section class="error_area bg_color pb-50 overflow-hidden">
                    <div class="error_dot one"></div>
                    <div class="error_dot two"></div>
                    <div class="error_dot three"></div>
                    <div class="error_dot four"></div>
                    <div class="container">
                        <div class="error_content_two text-center">
                            <div class="error_img">
                                <img
                                    class="position-absolute error_shap"
                                    src={_404_bg}
                                    alt=""
                                />
                                <div
                                    class="one wow clipInDown"
                                    data-wow-delay="1s"
                                >
                                    <img
                                        class="img_one"
                                        src={_404_one}
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="two wow clipInDown"
                                    data-wow-delay="1.5s"
                                >
                                    <img
                                        class="img_two"
                                        src={_404_two}
                                        alt=""
                                    />
                                </div>
                                <div
                                    class="three wow clipInDown"
                                    data-wow-delay="1.8s"
                                >
                                    <img
                                        class="img_three"
                                        src={_404_three}
                                        alt=""
                                    />
                                </div>
                            </div>
                            <h2 class="wow fadeIn">
                                Error. We can’t find the page you’re looking
                                for.
                            </h2>
                            <p>
                                Sorry for the inconvenience. Go to our homepage
                                or check out our latest collections for Fashion,
                                Chair, Decoration...
                            </p>

                            <Link to="/" className="action_btn theme-btn mt-4">
                                <i class="arrow_left"></i>
                                Go back to the home page
                            </Link>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
