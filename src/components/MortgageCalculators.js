"use client";

import { useEffect, useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import { FaCircle } from "react-icons/fa";

export default function MortgageCalculators() {
  const [residentType, setResidentType] = useState("resident");
  const [propertyPrice, setPropertyPrice] = useState(1000000);
  const [downPayment, setDownPayment] = useState(200000);
  const [years, setYears] = useState(20);

  const [loanAmount, setLoanAmount] = useState(800000);
  const [monthlyPayment, setMonthlyPayment] = useState(4218);

  // interest rates
  const residentRate = 3.99;
  const nationalRate = 3.49;

  useEffect(() => {
    calculateMortgage();
  }, [propertyPrice, downPayment, years, residentType]);

  const calculateMortgage = () => {
    const principal = propertyPrice - downPayment;

    setLoanAmount(principal);

    const annualRate =
      residentType === "resident" ? residentRate : nationalRate;

    const monthlyRate = annualRate / 100 / 12;

    const totalMonths = years * 12;

    const emi =
      (principal * monthlyRate * Math.pow(1 + monthlyRate, totalMonths)) /
      (Math.pow(1 + monthlyRate, totalMonths) - 1);

    setMonthlyPayment(Math.round(emi));
  };

  const formatNumber = (num) => {
    return Number(num).toLocaleString("en-US");
  };

  return (
    <>
      <div className="mortgage-section2">
        <Container>
          <Row>
            <Col lg={12}>
              <div className="top-content">
                <h2>
                  Calculate Your <span>Mortgage</span> in Seconds
                </h2>

                <p>
                  Estimate your monthly payments and understand your
                  affordability before applying.
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div className="mortgage-section">
        <Container>
          <div className="calculator-card">
            {/* HEADING */}

            <Row className="gx-0">
              {/* LEFT SIDE */}
              <Col lg={6}>
                <div className="left-side">
                  {/* RESIDENT STATUS */}
                  <div className="field-box">
                    <label>Residency Status</label>

                    <div className="status-wrapper">
                      <button
                        className={
                          residentType === "resident"
                            ? "status-btn active"
                            : "status-btn"
                        }
                        onClick={() => setResidentType("resident")}
                      >
                        UAE Resident
                      </button>

                      <button
                        className={
                          residentType === "national"
                            ? "status-btn active"
                            : "status-btn"
                        }
                        onClick={() => setResidentType("national")}
                      >
                        UAE National
                      </button>
                    </div>
                  </div>

                  {/* PROPERTY PRICE */}
                  <div className="field-box">
                    <label>Property Price</label>

                    <div className="input-wrapper">
                      <Form.Control
                        type="number"
                        value={propertyPrice}
                        onChange={(e) =>
                          setPropertyPrice(Number(e.target.value))
                        }
                        className="custom-input"
                      />

                      <span className="aed">AED</span>
                    </div>
                  </div>

                  {/* DOWN PAYMENT */}
                  <div className="field-box">
                    <label>Down Payment</label>

                    <div className="input-wrapper">
                      <Form.Control
                        type="number"
                        value={downPayment}
                        onChange={(e) => setDownPayment(Number(e.target.value))}
                        className="custom-input"
                      />

                      <span className="aed">AED</span>
                    </div>
                  </div>

                  {/* LOAN DURATION */}
                  <div className="field-box">
                    <label>Loan Duration</label>

                    <div className="slider-box">
                      <input
                        type="range"
                        min="1"
                        max="30"
                        value={years}
                        onChange={(e) => setYears(Number(e.target.value))}
                        className="range-slider"
                      />

                      <div className="range-footer">
                        <span>0 Month</span>

                        <span>{years} Year</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Col>

              {/* RIGHT SIDE */}
              <Col lg={6}>
                <div className="right-side">
                  <div className="result-box">
                    <div className="result-item">
                      <p>Loan Amount</p>

                      <h1>
                        {formatNumber(loanAmount)} <span>AED</span>
                      </h1>
                    </div>

                    <div className="result-item second">
                      <p>Monthly Cost</p>

                      <h1>
                        {formatNumber(monthlyPayment)} <span>AED</span>
                      </h1>
                    </div>

                    <div className="bottom-area">
                      <small>
                        This calculation is based off of live products in our
                        database
                      </small>

                      <button className="cta">
                        Speak With a Mortgage Expert
                      </button>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </Container>
      </div>

      <style jsx>{`
        /* CTA */
        .cta {
          margin-top: 30px;
          background: var(--secondary);
          color: white;
          border: none;
          padding: 12px 48px;
          border-radius: 10px;
          font-weight: 600;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          cursor: pointer;
          transition: 0.3s;
        }
        .mortgage-section2 {
          padding-top: 40px;
        }
        .mortgage-section {
          background: #fff;
          padding: 60px 0;
          padding-top: 20px;
        }

        .calculator-card {
          background: #efefef;
          border-radius: 10px;
          padding: 40px;
        }

        .top-content h2 {
          font-size: 38px;
          font-weight: 700;
          margin-bottom: 8px;
          color: #111;
        }

        .top-content h2 span {
          color: #69b64a;
        }

        .top-content p {
          color: #666;
          font-size: 15px;
          //   margin-bottom: 35px;
        }

        .left-side {
          padding-right: 40px;
          border-right: 1px solid #d7d7d7;
        }

        .right-side {
          padding-left: 40px;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .field-box {
          margin-bottom: 28px;
        }

        .field-box label {
          display: block;
          margin-bottom: 10px;
          font-size: 14px;
          font-weight: 600;
          color: #222;
        }

        .status-wrapper {
          display: flex;
          gap: 10px;
        }

        .status-btn {
          border: none;
          background: #fff;
          padding: 11px 18px;
          border-radius: 6px;
          font-size: 13px;
          color: #555;
          transition: 0.3s;
        }

        .status-btn.active {
          background: #ffffff;
          font-weight: 600;
          color: #111;
          box-shadow: 0 0 0 1px #ddd;
        }

        .input-wrapper {
          position: relative;
        }

        .custom-input {
          height: 52px;
          border-radius: 8px;
          border: none;
          background: #fff;
          box-shadow: none !important;
          padding-right: 70px;
          font-size: 15px;
        }

        .custom-input::-webkit-outer-spin-button,
        .custom-input::-webkit-inner-spin-button {
          -webkit-appearance: none;
          margin: 0;
        }

        .aed {
          position: absolute;
          right: 18px;
          top: 50%;
          transform: translateY(-50%);
          color: #999;
          font-size: 12px;
          font-weight: 600;
        }

        .slider-box {
          background: #fff;
          padding: 18px 16px 10px;
          border-radius: 8px;
        }

        .range-slider {
          width: 100%;
          appearance: none;
          height: 2px;
          background: #222;
          border-radius: 20px;
          outline: none;
        }

        .range-slider::-webkit-slider-thumb {
          appearance: none;
          width: 12px;
          height: 12px;
          background: #000;
          border-radius: 50%;
          cursor: pointer;
        }

        .range-footer {
          display: flex;
          justify-content: space-between;
          margin-top: 10px;
        }

        .range-footer span {
          font-size: 12px;
          color: #999;
        }

        .result-box {
          width: 100%;
          text-align: center;
        }

        .result-item {
          margin-bottom: 45px;
          text-align: end;
        }

        .result-item.second {
          margin-bottom: 25px;
        }

        .result-item p {
          font-size: 15px;
          color: #222;
          margin-bottom: 10px;
        }

        .result-item h1 {
          font-size: 54px;
          font-weight: 700;
          color: #000;
          line-height: 1;
        }

        .result-item h1 span {
          font-size: 28px;
          font-weight: 500;
        }

        .bottom-area {
          text-align: end;
        }

        .bottom-area small {
          color: #000;
          font-size: 17px;
          display: block;
          margin-bottom: 0px;
        }

        .expert-btn:hover {
          background: #004ab0;
        }

        @media (max-width: 991px) {
          .left-side {
            border-right: none;
            padding-right: 0;
            margin-bottom: 40px;
          }

          .right-side {
            padding-left: 0;
          }

          .top-content h2 {
            font-size: 28px;
          }

          .result-item h1 {
            font-size: 40px;
          }
        }

        @media (max-width: 576px) {
          .calculator-card {
            padding: 25px;
          }

          .top-content h2 {
            font-size: 24px;
          }

          .result-item h1 {
            font-size: 32px;
          }

          .result-item h1 span {
            font-size: 18px;
          }

          .status-wrapper {
            flex-direction: column;
          }
        }
      `}</style>
    </>
  );
}
