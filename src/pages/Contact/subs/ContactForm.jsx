import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const { name, email, subject, message } = formData;
        if (!name || !email || !subject || !message) {
            toast.error("Please fill in all fields!");
            return;
        }

        toast.success("Your message has been sent!");
        // Add your real submission logic here
    };

    return (
        <div className="col-lg-6 offset-lg-1">
            <div className="contact-form-widget">
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="col-md-6">
                            <label htmlFor="f-name">Full Name</label>
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
                            <label htmlFor="email-address">Email</label>
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
                            <label htmlFor="form-sub">Subject</label>
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
                            <label htmlFor="form-text">Messages</label>
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
                                By submitting this form you consent to us
                                emailing you occasionally about our products and
                                services. You can unsubscribe from emails at any
                                time. We will never pass your email onto third
                                parties.
                            </p>
                        </div>
                        <div className="col-12 mt-35">
                            <button
                                type="submit"
                                className="theme-btn theme-btn-lg w-100"
                            >
                                Submit Now
                            </button>
                        </div>
                    </div>
                </form>
                <ToastContainer />
            </div>
        </div>
    );
}
