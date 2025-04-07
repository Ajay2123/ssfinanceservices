import { useEffect, useRef, useState } from "react";

const CounterUp = ({ value, duration = 400, delay = 10 }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const node = ref.current;
        if (!node) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    animateCounter();
                    observer.unobserve(node);
                }
            },
            { threshold: 1.0 }
        );

        observer.observe(node);

        return () => observer.disconnect();
    }, []);

    const animateCounter = () => {
        const numericValue = parseFloat(value.toString().replace(/,/g, ""));
        const isFloat = value.toString().includes(".");
        const decimalPlaces = isFloat
            ? value.toString().split(".")[1].length
            : 0;
        const steps = Math.ceil(duration / delay);
        const values = [];

        for (let i = steps; i >= 1; i--) {
            let current = (numericValue / steps) * i;
            current = isFloat
                ? current.toFixed(decimalPlaces)
                : Math.floor(current);
            values.unshift(addCommas(current));
        }

        let i = 0;
        const interval = setInterval(() => {
            setCount(values[i]);
            i++;
            if (i >= values.length) clearInterval(interval);
        }, delay);
    };

    const addCommas = (num) => {
        const parts = num.toString().split(".");
        parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        return parts.join(".");
    };

    return <span ref={ref}>{count}</span>;
};

export default CounterUp;
