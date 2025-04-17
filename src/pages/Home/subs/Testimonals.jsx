import React from "react";
import Slider from "react-slick";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import avatar from "../../../assets/img/home-4/client-rev-2.png";

const style = `
 .custom-arrow {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        z-index: 2;
        background: transparent;
        border: none;
    }

    .custom-arrow.slick-prev {
        left: -100px;
        top: 150px
    }

    .custom-arrow.slick-next {
        right: -100px;   top: 150px
    }

    .custom-arrow i {
        display: inline-block;
        color: #333;
        font-size: 24px;
        pointer-events: none;
    }
     .client-slider-2 .slick-slide {
        padding: 0 15px;
    }

    .client-slider-2 {
        margin: 0 -5px; /* compensate for padding */
    }

    .slick-list{
       height:350px
    }

    .slick-dots li button:before {
        color: transparent !important;
    }

    .slick-dots li.slick-active button:before {
        color: transparent !important;
    }
`;
const testimonials = [
    {
        name: "John Kellmen",
        role: "UI/UX Designer",
        image: avatar,
        quote: "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
        rating: 5,
    },
    {
        name: "Nina Jones",
        role: "Frontend Engineer",
        image: avatar,
        quote: "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
        rating: 5,
    },
    {
        name: "Mark Helson",
        role: "Product Manager",
        image: avatar,
        quote: "Assertively procrastinate distributed relationships whereas equity invested intellectual capital everything",
        rating: 4,
    },
];

const NextArrow = ({ onClick, className, style }) => (
    <button
        className={`${className} custom-arrow`}
        style={{ ...style }}
        onClick={onClick}
    >
        <i className="arrow_right" style={{ pointerEvents: "none" }}></i>
    </button>
);

const PrevArrow = ({ onClick, className, style }) => (
    <button
        className={`${className} custom-arrow`}
        style={{ ...style }}
        onClick={onClick}
    >
        <i className="arrow_left" style={{ pointerEvents: "none" }}></i>
    </button>
);
const sliderSettings = {
    dots: true,
    arrows: true,
    infinite: true,

    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
            },
        },
    ],
};
export default function Testimonals() {
    return (
        <>
            <style>{style}</style>
            <section className="client-area-2 pt-60 pb-100">
                <div className="container">
                    <div className="section-title text-center">
                        <motion.span
                            className="short-title-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            Testimonials
                        </motion.span>
                        <motion.h1
                            className="mb-3"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                        >
                            Customer{" "}
                            <span className="underline-shape">feedbacks</span>
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            There are many variations of passages of Lorem Ipsum
                            available,
                            <br />
                            but the majority have suffered alteration in some
                            form.
                        </motion.p>
                    </div>

                    <Slider
                        {...sliderSettings}
                        className="client-slider-2 mt-5 h-25 "
                    >
                        {testimonials.map((t, index) => (
                            <motion.div
                                key={index}
                                className="single-client"
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.2,
                                }}
                                viewport={{ once: true }}
                            >
                                <div className="rating mb-20">
                                    {[...Array(t.rating)].map((_, i) => (
                                        <i key={i} className="icon_star"></i>
                                    ))}
                                </div>
                                <p className="mb-20">{t.quote}</p>
                                <div className="client-info d-flex align-items-center gap-3">
                                    <img
                                        src={t.image}
                                        className="img-fluid"
                                        alt={t.name}
                                        width={60}
                                        height={60}
                                    />
                                    <div className="client-name">
                                        <p className="mb-0">{t.name}</p>
                                        <span className="role">{t.role}</span>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </Slider>
                </div>
            </section>
        </>
    );
}
