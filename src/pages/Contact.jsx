import React, { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Basic form validation
        const { name, email, subject, message } = formData;
        if (!name || !email || !subject || !message) {
            toast.error("Please fill in all fields!");
            return;
        }

        setLoading(true);

        // Simulating form submission (use fetch or axios for real requests)
        try {
            const response = await fetch("/mail.php", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                toast.success("Your message has been sent!");
                setFormData({
                    name: "",
                    email: "",
                    subject: "",
                    message: "",
                });
            } else {
                toast.error("Something went wrong. Please try again.");
            }
        } catch (error) {
            toast.error("An error occurred. Please try again.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            <section className="pt-140 pb-140 get-touch-area bg_white">
                <div className="container">
                    <div className="row gy-4 gy-lg-0">
                        <div className="col-lg-5">
                            <div className="section-title text-start">
                                <h2>Get in touch with us.</h2>
                                <p>
                                    Want to get in touch? We'd love to hear from
                                    you. Here's how you can reach us...
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
                                            <i
                                                className="fa fa-envelope-o"
                                                aria-hidden="true"
                                            ></i>
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
                                                1550 Bryant Street STE 750, San
                                                Francisco, CA 94103
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
                                                Monday - Saturday: 9am - 7pm
                                                Sunday: 12am — 6pm
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-6 offset-lg-1">
                            <div className="contact-form-widget">
                                <form onSubmit={handleSubmit}>
                                    <div className="row">
                                        <div className="col-md-6">
                                            <label htmlFor="f-name">
                                                Full Name
                                            </label>
                                            <input
                                                type="text"
                                                id="f-name"
                                                name="name"
                                                className="form-control"
                                                placeholder="What's your name?"
                                                value={formData.name}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-6 mt-20 mt-md-0">
                                            <label htmlFor="email-address">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                id="email-address"
                                                name="email"
                                                className="form-control"
                                                placeholder="yourname@example.com"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12 mt-20">
                                            <label htmlFor="form-sub">
                                                Subject
                                            </label>
                                            <input
                                                type="text"
                                                id="form-sub"
                                                name="subject"
                                                className="form-control"
                                                placeholder="Your subject"
                                                value={formData.subject}
                                                onChange={handleChange}
                                                required
                                            />
                                        </div>
                                        <div className="col-md-12 mt-20">
                                            <label htmlFor="form-text">
                                                Messages
                                            </label>
                                            <textarea
                                                cols="30"
                                                rows="5"
                                                name="message"
                                                id="form-text"
                                                className="form-control pt-15"
                                                placeholder="Your message......"
                                                value={formData.message}
                                                onChange={handleChange}
                                                required
                                            ></textarea>
                                        </div>
                                        <div className="col-12 mt-3">
                                            <p className="policy-text">
                                                By submitting this form you
                                                consent to us emailing you
                                                occasionally about our products
                                                and services. You can
                                                unsubscribe from emails at any
                                                time, and we will never pass
                                                your email onto third parties.
                                                Privacy Policy
                                            </p>
                                        </div>
                                        <div className="col-12 mt-35">
                                            <button
                                                type="submit"
                                                className="theme-btn theme-btn-lg w-100"
                                                disabled={loading}
                                            >
                                                {loading
                                                    ? "Submitting..."
                                                    : "Submit Now"}
                                            </button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Toast Container */}
            <ToastContainer />
        </div>
    );
}
