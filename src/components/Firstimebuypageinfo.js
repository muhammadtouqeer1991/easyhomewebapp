// components/MortgageSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Firstimebuypageinfo = () => {
  const keyFeatures = [
    "Up to 80% financing for property purchases",
    "Low-doc mortgage options tailored to your business model",
    "Flexible eligibility even without salary slips or fixed monthly income",
    "Competitive interest rates and exclusive lender tie-ups",
    "Fast-track approvals with Windsor’s assisted documentation process",
  ];

  const keyFeatures2 = [
    "Dedicated mortgage expert from start to finish",
    "Transparent, unbiased advice",
    "Access to exclusive first-time buyer bank offers",
    "End-to-end service — we even liaise with agents and banks for you",
    "Take the First Step Towards Homeownership",
  ];

  const whoFor = [
    "Up to 80% Loan-to-Value (LTV) for UAE residents",
    "Competitive interest rates from top UAE banks",
    "Assistance with pre-approvals before property search",
    "Help with DLD registration, valuation & bank paperwork",
    "Access to both ready & off-plan properties",
    "Islamic & conventional financing options",
  ];

  return (
    <Container style={{ padding: "60px 20px" }}>
      {/* Key Features Section */}
      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            Buying Your First Home in the UAE? We’ve Got You Covered
          </h3>
          <p>
            At Windsor Premier, we understand how exciting—and
            overwhelming—buying your first home can be. Whether you’re a
            resident or non-resident, salaried or self-employed, we’re here to
            guide you every step of the way with expert advice and access to the
            best mortgage options in the UAE.
          </p>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            {keyFeatures.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <FaCheckCircle
                  color="#4ade80"
                  style={{ marginRight: "10px" }}
                />{" "}
                {item}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="/firstimebuyImg.webp"
              alt="Financial Planning"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </Col>
      </Row>

      {/* Who is this for Section */}
      <Row className="align-items-center flex-row-reverse">
        <Col md={6}>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            What We Offer First-Time Buyers:
          </h3>
          <p
            style={{ color: "#4b5563", fontSize: "16px", marginBottom: "20px" }}
          >
            An Oqood resale is when a buyer purchases an off-plan property from
            an existing buyer (not the developer) before the handover. The
            transaction is registered under the DLD’s Oqood system, and a
            mortgage can be arranged for eligible buyers—subject to bank and
            developer approval.
          </p>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            {whoFor.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <FaCheckCircle
                  color="#60a5fa"
                  style={{ marginRight: "10px" }}
                />{" "}
                {item}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="/firstimebuyImg2.webp"
              alt="Family Moving"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </Col>
      </Row>

      <Row className="align-items-center mb-5">
        <Col md={6}>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            Why Easy Home Premier?
          </h3>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            {keyFeatures2.map((item, idx) => (
              <li
                key={idx}
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                }}
              >
                <FaCheckCircle
                  color="#4ade80"
                  style={{ marginRight: "10px" }}
                />{" "}
                {item}
              </li>
            ))}
          </ul>
        </Col>
        <Col md={6}>
          <div
            style={{
              overflow: "hidden",
              borderRadius: "20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.15)",
            }}
          >
            <img
              src="/firstimebuyImg3.webp"
              alt="Financial Planning"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                display: "block",
              }}
            />
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Firstimebuypageinfo;
