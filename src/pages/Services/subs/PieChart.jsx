import React, { useState, useEffect, useRef } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const COLORS = ["#18cb96", "#FA2A55"]; // Principal = blue, Interest = orange

function PieChartComponent({ principal, interest }) {
    const [chartSize, setChartSize] = useState({ width: 250, height: 250 });
    const chartRef = useRef(null);

    useEffect(() => {
        const resizeChart = () => {
            if (chartRef.current) {
                const width = chartRef.current.offsetWidth;
                const height = chartRef.current.offsetHeight;
                setChartSize({
                    width: width > 0 ? width : 250, // Fallback to 250 if no width
                    height: height > 0 ? height : 250, // Fallback to 250 if no height
                });
            }
        };

        window.addEventListener("resize", resizeChart);
        resizeChart(); // Call it immediately to set initial size

        return () => {
            window.removeEventListener("resize", resizeChart);
        };
    }, []);

    const data = [
        { name: "Principal", value: principal },
        { name: "Interest", value: parseFloat(interest) },
    ];

    return (
        <div
            style={{
                width: "100%",
                textAlign: "center",
                margin: "1rem",
                display: "flex",
                justifyContent: "center",
            }}
            ref={chartRef}
        >
            <PieChart width={chartSize.width} height={chartSize.height}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ percent }) => ` ${(percent * 100).toFixed(0)}%`}
                    outerRadius="80%"
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                        <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                        />
                    ))}
                </Pie>
                <Tooltip formatter={(value) => `₹${value}`} />
            </PieChart>
        </div>
    );
}

export default PieChartComponent;
