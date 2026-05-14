// components/WhyEasyHome.jsx

"use client";

import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const features = [
  "Access to Leading UAE Banks",
  "Faster Approval Process",
  "Dedicated Mortgage Advisors",
  "Transparent & Honest Guidance",
  "Solutions for Expats & Investors",
  "End-to-End Support",
];

const WhyEasyHome = () => {
  return (
    <>
      <style jsx>{`
        .why-section {
          background: #f3f3f3;
          padding: 40px 0;
          font-family: Arial, sans-serif;
        }

        .main-heading {
          font-size: 38px;
          font-weight: 800;
          margin-bottom: 8px;
          letter-spacing: -0.5px;
          color: #111;
          line-height: 1;
        }

        .blue {
          color: #074dab;
        }

        .green {
          color: #63b246;
        }

        .sub-heading {
          font-size: 15px;
          color: #333;
          margin-bottom: 28px;
          font-weight: 400;
        }

        .feature-box {
          background: #fff;
          border-radius: 4px;
          height: 68px;
          display: flex;
          align-items: center;
          padding: 0 18px;
          position: relative;
          box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.03);
        }

        .feature-box::before {
          content: "";
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 3px;
          height: 28px;
          background: #63b246;
          border-radius: 2px;
        }

        .feature-text {
          margin: 0;
          padding-left: 18px;
          font-size: 14px;
          color: #222;
          font-weight: 400;
          line-height: 1.4;
        }

        @media (max-width: 768px) {
          .main-heading {
            font-size: 28px;
          }

          .feature-box {
            height: auto;
            min-height: 64px;
            padding: 14px 16px;
          }
        }
      `}</style>

      <section className="why-section">
        <Container>
          <h2 className="main-heading">
            WHY <span className="blue">EASYHOME</span>{" "}
            <span className="green">MORTGAGES</span>
          </h2>

          <p className="sub-heading">Why Homebuyers Trust EasyHome Mortgages</p>

          <Row className="g-3">
            {features.map((item, index) => (
              <Col md={6} lg={4} key={index}>
                <div className="feature-box">
                  <p className="feature-text">{item}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
    </>
  );
};

export default WhyEasyHome;
