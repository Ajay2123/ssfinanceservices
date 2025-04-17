import React, { useState } from "react";
import RangeSlider from "./RangeSlider";
import PieChartComponent from "./PieChart";
import { Link } from "react-router-dom";

function Calculator() {
    const [loanTermType, setLoanTermType] = useState("Monthly");
    const [loanAmount, setLoanAmount] = useState(100000);
    const [interestRate, setInterestRate] = useState(7);
    const [loanDuration, setLoanDuration] = useState(6);

    // Get dynamic configuration based on loan type
    const getLoanConfig = () => {
        switch (loanTermType) {
            case "Yearly":
                return {
                    symbol: "Y",
                    minAmount: 25000,
                    maxAmount: 10000000,
                    minDuration: 5,
                    maxDuration: 20,
                    durationInMonths: loanDuration * 12,
                };
            case "Monthly":
                return {
                    symbol: "M",
                    minAmount: 100000,
                    maxAmount: 1500000,
                    minDuration: 3,
                    maxDuration: 12,
                    durationInMonths: loanDuration,
                };
            case "Weekly":
                return {
                    symbol: "W",
                    minAmount: 15000,
                    maxAmount: 100000,
                    minDuration: 4,
                    maxDuration: 12,
                    durationInMonths: loanDuration / 4, // approx months
                };
            default:
                return {};
        }
    };

    const {
        symbol,
        minAmount,
        maxAmount,
        minDuration,
        maxDuration,
        durationInMonths,
    } = getLoanConfig();

    // EMI calculation (based on monthly repayment)
    const calculateEMI = () => {
        const principal = loanAmount;
        const rate = interestRate / 100 / 12;
        const duration = durationInMonths;

        if (rate === 0) return (principal / duration).toFixed(2);

        const emi =
            (principal * rate * Math.pow(1 + rate, duration)) /
            (Math.pow(1 + rate, duration) - 1);

        return emi.toFixed(2);
    };

    const calculateTotalAmount = () => {
        const emi = parseFloat(calculateEMI());
        return (emi * durationInMonths).toFixed(2);
    };

    const calculateInterestPayable = () => {
        const total = parseFloat(calculateTotalAmount());
        return (total - loanAmount).toFixed(2);
    };

    const handleTermChange = (term) => {
        setLoanTermType(term);
        switch (term) {
            case "Yearly":
                setLoanAmount(25000);
                setLoanDuration(5);
                break;
            case "Monthly":
                setLoanAmount(100000);
                setLoanDuration(6);
                break;
            case "Weekly":
                setLoanAmount(15000);
                setLoanDuration(4);
                break;
            default:
                break;
        }
    };

    return (
        <section className="calculator-area-three">
            <div className="container">
                <div className="section-title bank-section-title mb-80">
                    <span className="short-title-2">Loan Calculator</span>
                    <h1 className="wow fadeInUp">
                        <span className="underline-shape">Calculate</span> your
                        loan
                        <br /> &amp; get loan details
                    </h1>
                </div>

                <div className="calculator-widget-2 mt-50">
                    <div className="row gy-lg-0 gy-3">
                        <div className="col-lg-7">
                            <div className="single-calculator-widget wow fadeInUp">
                                <h4>Loan Calculator</h4>
                                <div className="range-label mt-40">
                                    Loan Term
                                </div>
                                <nav>
                                    <div className="nav nav-tabs loan-type-select">
                                        {["Yearly", "Monthly", "Weekly"].map(
                                            (type) => (
                                                <button
                                                    key={type}
                                                    className={`nav-link ${
                                                        loanTermType === type
                                                            ? "active"
                                                            : ""
                                                    }`}
                                                    onClick={() =>
                                                        handleTermChange(type)
                                                    }
                                                >
                                                    {type}
                                                </button>
                                            )
                                        )}
                                    </div>
                                </nav>

                                <div className="range-section">
                                    <div className="range-label">
                                        Loan Amount
                                    </div>
                                    <RangeSlider
                                        min={minAmount}
                                        max={maxAmount}
                                        step={5000}
                                        value={loanAmount}
                                        symbol="₹"
                                        onChange={setLoanAmount}
                                    />
                                </div>

                                <div className="range-section">
                                    <div className="range-label">
                                        Interest Rate
                                    </div>
                                    <RangeSlider
                                        min={5}
                                        max={20}
                                        step={0.5}
                                        value={interestRate}
                                        symbol="%"
                                        onChange={setInterestRate}
                                    />
                                </div>

                                <div className="range-section">
                                    <div className="range-label">
                                        Loan Duration ({loanTermType})
                                    </div>
                                    <RangeSlider
                                        min={minDuration}
                                        max={maxDuration}
                                        step={1}
                                        value={loanDuration}
                                        symbol={symbol}
                                        onChange={setLoanDuration}
                                    />
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-5 pl-lg-35">
                            <div className="calculator-result-widget wow fadeInUp">
                                <PieChartComponent
                                    principal={loanAmount}
                                    interest={calculateInterestPayable()}
                                />
                                <div className="graph-indicator">
                                    <div>
                                        <span className="blue-dot"></span> EMI
                                        Amount
                                    </div>
                                    <div>
                                        <span className="orange-dot"></span>{" "}
                                        Interest Payable
                                    </div>
                                </div>
                                <ul className="loan-calculation list-unstyled">
                                    <li>
                                        <span className="label">Principal</span>
                                        <span className="amount">
                                            ₹{loanAmount}*
                                        </span>
                                    </li>
                                    <li>
                                        <span className="label">
                                            Interest Payable
                                        </span>
                                        <span className="amount">
                                            ₹{calculateInterestPayable()}*
                                        </span>
                                    </li>
                                    <li>
                                        <span className="label">
                                            Loan Duration
                                        </span>
                                        <span className="amount">
                                            {loanDuration} {symbol}
                                        </span>
                                    </li>
                                    <li>
                                        <span className="label">
                                            EMI - {loanTermType}
                                        </span>
                                        <span className="amount">
                                            ₹{calculateEMI()}
                                        </span>
                                    </li>
                                </ul>
                                <Link
                                    to="/contact"
                                    className="theme-btn theme-btn-lg mt-20 w-100"
                                >
                                    Apply Now <i className="arrow_right"></i>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Calculator;
