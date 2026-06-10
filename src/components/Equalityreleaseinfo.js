// components/MortgageSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Equalityreleaseinfo = () => {
  const keyFeatures = [
    "Access to top UAE banks offering equity release products",
    "Expert advice on how much equity you can unlock",
    "End-to-end coordination—from valuation to disbursal",
    "Transparent, fast, and secure process",
  ];

  const whoFor = [
    "Self-employed entrepreneurs or business owners",
    "Freelancers or consultants with irregular income streams",
    "Individuals with business income from sole proprietorships, LLCs, or partnerships",
    "Professionals with income from multiple sources",
  ];

  const keyfeaturess = [
    "Loan amounts based on up to 70–80% of your property’s current value",
    "Available for completed, mortgage-free properties or properties with small existing loans",
    "Applicable for residents and non-residents",
    "Fixed and variable interest rates",
    "Monthly repayment over flexible terms (up to 25 years)",
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
            Need Access to Cash? Use the Value of Your Home.
          </h3>
          <p>
            If you own a property in the UAE, you may be able to release equity
            from it through a mortgage—giving you access to funds for new
            property purchase and home renovations.
          </p>
          <p>
            At Windsor Premier, we specialize in equity release, helping
            homeowners convert their built-up property value into accessible,
            low-interest funding.
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
            What is an Equity Release Mortgage?
          </h3>
          <p>
            Equity release (or cash-out refinancing) allows you to borrow
            against the current value of your property. You receive a lump sum
            loan from the bank, while retaining ownership and continuing to live
            in or rent out the property.
          </p>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            Key Features:
          </h3>

          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            {keyfeaturess.map((item, idx) => (
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
            Why Choose Windsor Premier?
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
    </Container>
  );
};

export default Equalityreleaseinfo;
