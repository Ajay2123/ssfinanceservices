import React from "react";
import ContactInfo from "./subs/ContactInfo";
import ContactForm from "./subs/ContactForm";

export default function Contact() {
    return (
        <div>
            <section className="pt-140 pb-140 get-touch-area bg_white">
                <div className="container">
                    <div className="row gy-4 gy-lg-0">
                        <ContactInfo />
                        <ContactForm />
                    </div>
                </div>
            </section>
        </div>
    );
}
