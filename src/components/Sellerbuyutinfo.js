// components/MortgageSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Sellerbuyutinfo = () => {
  const keyFeatures = [
    "Up to 80% Loan-to-Value (LTV) for residents",
    "Balance settlement with existing bank or developer",
    "Flexible terms for both residents & non-residents",
    "Available for ready and off-plan properties (developer-approved)",
    "Fully compliant with DLD and Oqood regulations",
  ];

  const whoFor = [
    "Resale of under-construction (Oqood) properties",
    "Sellers needing to exit before handover",
    "Ready properties with an active mortgage",
    "Investor exit deals or distressed sales",
  ];

  const whoFor2 = [
    "Major UAE banks, developers & escrow-approved resale structures",
    "Seller’s existing lender for payoff coordination",
    "DLD-approved legal and valuation partners",
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
            Buying Out a Seller? We Help You Finance It Seamlessly
          </h3>
          <p>
            In today’s UAE property market, seller buyouts—where a buyer agrees
            to take over and settle the remaining mortgage or balance from an
            existing owner—are becoming more common. Whether it’s an investment
            or a primary residence, Windsor Premier helps you structure the
            right mortgage to buy out the seller with confidence.
          </p>
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
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
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
            What is a Seller Buyout?
          </h3>
          <p
            style={{ color: "#4b5563", fontSize: "16px", marginBottom: "20px" }}
          >
            A seller buyout transaction typically involves a buyer taking over a
            property where the seller has an outstanding mortgage or payment
            plan. The buyer pays off the seller’s dues (partially or fully), and
            secures a new mortgage to take ownership.
          </p>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            When Is This Used?
          </h3>
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
            Key Features of a Seller Buyout Mortgage:
          </h3>
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

      <Row className="align-items-center flex-row-reverse">
        <Col md={6}>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            We Work With:
          </h3>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            {whoFor2.map((item, idx) => (
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
          <p>We make complicated transactions simple.</p>
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
    </Container>
  );
};

export default Sellerbuyutinfo;
