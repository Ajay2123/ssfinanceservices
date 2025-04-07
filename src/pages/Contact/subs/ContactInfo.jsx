import React from "react";
import "font-awesome/css/font-awesome.min.css";

export default function ContactInfo() {
    return (
        <div className="col-lg-5">
            <div className="section-title text-start">
                <h2>Get in touch with us.</h2>
                <p>
                    Want to get in touch? We'd love to hear from you. Here's how
                    you can reach us...
                </p>
            </div>
            <div className="row mt-55">
                <div className="col-sm-6">
                    <div className="get-touch-box">
                        <div className="icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div>
                            <p>Call the helpline:</p>
                            <span>(02) 4003 7936</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="get-touch-box">
                        <div className="icon">
                            <i className="fa fa-envelope-o"></i>
                        </div>
                        <div>
                            <p>Email us:</p>
                            <span>hello@banca.com</span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="get-touch-box mt-30">
                        <div className="icon">
                            <i className="icon_pin_alt"></i>
                        </div>
                        <div>
                            <p>Location</p>
                            <span>
                                1550 Bryant Street STE 750, San Francisco, CA
                                94103
                            </span>
                        </div>
                    </div>
                </div>
                <div className="col-sm-6">
                    <div className="get-touch-box mt-30">
                        <div className="icon">
                            <i className="icon_clock_alt"></i>
                        </div>
                        <div>
                            <p>Work Hours</p>
                            <span>
                                Monday - Saturday: 9am - 7pm | Sunday: 12am —
                                6pm
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
