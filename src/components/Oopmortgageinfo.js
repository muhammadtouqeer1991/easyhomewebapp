// components/MortgageSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Oopmortgageinfo = () => {
  const keyFeatures = [
    "Up to 80% financing for property purchases",
    "Low-doc mortgage options tailored to your business model",
    "Flexible eligibility even without salary slips or fixed monthly income",
    "Competitive interest rates and exclusive lender tie-ups",
    "Fast-track approvals with Windsor’s assisted documentation process",
  ];

  const keyFeatures2 = [
    "Mortgage options available for secondary off-plan units",
    "Bank coordination with developer and seller",
    "Competitive rates and flexible payment structures",
    "Full DLD compliance with updated Oqood assignment procedures",
    "Available for both residents and non-residents",
  ];

  const whoFor = [
    "Self-employed entrepreneurs or business owners",
    "Freelancers or consultants with irregular income streams",
    "Individuals with business income from sole proprietorships, LLCs, or partnerships",
    "Professionals with income from multiple sources",
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
            Buying an Off-Plan Property on Resale? We Make It Easy
          </h3>
          <p>
            Oqood resale transactions involve the sale of an under-construction
            (off-plan) property that is already registered under the Dubai Land
            Department’s Oqood system. Financing such deals can be complex—but
            with Windsor Premier’s expertise, we make it smooth, compliant, and
            fast.
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
              src="/finantialImg.webp"
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
            What is an Oqood Resale?
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
              src="/familymoving.webp"
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
            Key Benefits of Financing an Oqood Resale with Us:
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
              src="/finantialImg.webp"
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

export default Oopmortgageinfo;
