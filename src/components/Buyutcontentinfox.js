// components/MortgageSection.jsx
import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const Buyutcontentinfox = () => {
  const keyFeatures = [
    "Quick comparison of available bank offers",
    "End-to-end coordination with both banks",
    "Fast-track approvals with minimal disruption",
    "Full support with documentation, valuation & legal",
  ];

  const whoFor = [
    "Self-employed entrepreneurs or business owners",
    "Freelancers or consultants with irregular income streams",
    "Individuals with business income from sole proprietorships, LLCs, or partnerships",
    "Professionals with income from multiple sources",
  ];

  const whoFor2 = [
    "Reduce your monthly EMI with a lower interest rate",
    "Extend or shorten your loan tenure",
    "Access additional funds through top-up options",
    "Shift from variable to fixed rates (or vice versa)",
    "Move to a Sharia-compliant (Islamic) mortgage",
    "Enjoy bank incentives like processing fee waivers or cashbacks",
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
            Paying Too Much on Your Current Mortgage?
          </h3>
          <p>
            If you’re stuck with a high interest rate or inflexible terms, a
            mortgage buyout (also known as a balance transfer) allows you to
            move your existing loan to a different bank—often with better rates,
            longer tenure, or cash-back offers.
          </p>
          <p>
            At Easyhome Mortgage Brokers, we help UAE residents and
            non-residents buy out their existing mortgages and refinance
            smartly.
          </p>
          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            What is a Mortgage Buyout?
          </h3>
          <p>
            A mortgage buyout is when a new bank pays off your current mortgage
            and replaces it with a new one—ideally at a lower cost, better
            terms, or with added benefits like top-up financing.
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
              src="/bayuttransitionImg.webp"
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
            Top Reasons to Consider a Buyout:
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

          <h3
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#1f2937",
            }}
          >
            We Work With 25+ UAE Banks
          </h3>
          <p>
            We compare the market on your behalf and present the best buyout
            options — saving you time, effort, and money.
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
            Why Choose Easyhome Mortgage for Your Buyout?
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
          <p>We don’t just help you switch — we help you switch smart.</p>
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

export default Buyutcontentinfox;
