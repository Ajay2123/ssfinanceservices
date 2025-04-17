import React from "react";
import arrow1 from "../../../assets/img/home-5/about-arrow-1.png";
import arrow2 from "../../../assets/img/home-5/about-arrow-2.png";
import loan1 from "../../../assets/img/home-5/loan1.png";
import loan2 from "../../../assets/img/home-5/loan2.png";
import logo from "../../../assets/img/logo/115x40.svg";
function UserConversation() {
    return (
        <section class="about-area-2 bg-white">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-6 wow fadeInLeft">
                        <div class="text-start">
                            <h1 class="mb-3">Get loan from 3 simple process</h1>
                            <p>
                                There are many variations of passages of Lorem
                                Ipsum available, but the majority have suffered
                                alteration in some form,
                            </p>
                            <ul class="list-unstyled feature-list">
                                <li>
                                    {" "}
                                    <i class="fas fa-check-circle"></i>It is a
                                    long established fact that a reader will be{" "}
                                </li>
                                <li>
                                    {" "}
                                    <i class="fas fa-check-circle"></i> It is a
                                    long established fact distracted by the
                                    readable
                                </li>
                            </ul>
                            <a href="#" class="read-more-btn">
                                <span>Learn about the process</span>
                                <i class="arrow_right"></i>
                            </a>
                        </div>
                    </div>
                    <div class="col-lg-6 wow fadeInRight">
                        <div class="sms-flow">
                            <img class="arrow-1" src={arrow1} alt="" />
                            <img class="arrow-2" src={arrow2} alt="" />
                            <img
                                class="msg-1 wow fadeInUp"
                                data-wow-delay="0.1s"
                                src={loan1}
                                alt=""
                            />
                            <img class="msg-2" alt="" src={logo} />
                            <img
                                class="msg-3 wow fadeInDown "
                                data-wow-delay="0.3s"
                                src={loan2}
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default UserConversation;
