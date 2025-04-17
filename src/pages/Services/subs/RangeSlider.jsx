import React, { useEffect, useRef, useState } from "react";
import noUiSlider from "nouislider";
import "nouislider/dist/nouislider.css";

const RangeSlider = ({ min, max, step, value, symbol, onChange }) => {
    const sliderRef = useRef(null);
    const inputRef = useRef(null);

    useEffect(() => {
        const slider = sliderRef.current;
        if (!slider) return;

        noUiSlider.create(slider, {
            start: [value],
            connect: [true, false],
            range: {
                min: min,
                max: max,
            },
            step: step,
            format: {
                to: (v) => Math.round(v),
                from: (v) => Number(v),
            },
            pips: {
                mode: "positions",
                values: [0, 13.79, 31.03, 48.28, 65.52, 82.76, 100],
                density: 5,
                stepped: true,
                format: {
                    to: (val) => `₹${Math.round(val / 1000)}k`,
                },
            },
        });

        const instance = slider.noUiSlider;

        instance.on("update", (values) => {
            const newVal = values[0];
            onChange(newVal);
            if (inputRef.current) {
                inputRef.current.value = newVal;
            }
        });

        return () => {
            if (slider && slider.noUiSlider) {
                slider.noUiSlider.destroy();
            }
        };
    }, [min, max, step, value, onChange]);

    const handleInputChange = (e) => {
        const newVal = e.target.value;
        if (sliderRef.current?.noUiSlider) {
            sliderRef.current.noUiSlider.set(newVal);
        }
        onChange(newVal);
    };

    return (
        <div className="single-range">
            <div
                id="RangeSlider"
                className="noUi-target noUi-ltr noUi-horizontal noUi-txt-dir-ltr"
                ref={sliderRef}
            ></div>

            <div className="input-group">
                <input
                    className="noTextMerge"
                    type="text"
                    ref={inputRef}
                    onChange={handleInputChange}
                    defaultValue={value}
                />
                <span className="input-group-text">{symbol}</span>
            </div>
        </div>
    );
};

export default RangeSlider;
