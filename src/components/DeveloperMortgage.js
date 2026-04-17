"use client";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaCheckCircle,
  FaArrowRight,
  FaHome,
  FaPercentage,
  FaGlobe,
} from "react-icons/fa";

export default function DeveloperMortgage() {
  const keyFeatures = [
    "Up to 80% financing for property purchases",
    "Low-doc mortgage options tailored to your business model",
    "Flexible eligibility even without salary slips or fixed monthly income",
    "Competitive interest rates and exclusive lender tie-ups",
    "Fast-track approvals with Windsor’s assisted documentation process",
  ];

  const whoFor = [
    "Choose a property from an approved developer",
    "We coordinate with the developer and bank to secure pre-approval",
    "Sign the Sales Purchase Agreement (SPA)",
    "Your mortgage is disbursed in line with the project’s progress",
  ];
  return (
    <div className="main-wrapper py-5">
      <Container>
        {/* HERO */}
        <div className="hero">
          <img src="/developerBanner.webp" alt="hero" />
          <div className="hero-content">
            <h1>Buying Direct from Developers? We’ve Got You Covered</h1>
            <p>
              Smart financing solutions designed for off-plan & ready properties
            </p>
          </div>
        </div>

        <div className="py-4">
          <h2
            style={{
              textAlign: "center",
              marginBottom: "20px",
              color: "#2c3e50",
            }}
          >
            Buy Property in the UAE Without Living There
          </h2>
          <p
            style={{
              textAlign: "center",
              maxWidth: "900px",
              margin: "0 auto 40px",
              color: "#000",
            }}
          >
            Explore world-class real estate investment opportunities in Dubai,
            Abu Dhabi, and across the Emirates, with expert guidance and
            seamless mortgage solutions for non-residents.
          </p>

          {/* Highlight Cards */}
          <Row className="mb-2">
            <Col md={4} className="mb-3">
              <Card
                style={{
                  border: "2px solid #5fb43d",
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <FaHome size={40} color="#5fb43d" />
                <Card.Body>
                  <Card.Title>Home Financing for Non-Residents</Card.Title>
                  <Card.Text>
                    Available for ready and selected off-plan properties.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card
                style={{
                  border: "2px solid #5fb43d",
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <FaPercentage size={40} color="#5fb43d" />
                <Card.Body>
                  <Card.Title>Attractive Loan-to-Value (LTV) Ratios</Card.Title>
                  <Card.Text>
                    Up to 65% financing depending on nationality and property
                    type.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
            <Col md={4} className="mb-3">
              <Card
                style={{
                  border: "2px solid #5fb43d",
                  borderRadius: "15px",
                  padding: "20px",
                  textAlign: "center",
                }}
              >
                <FaGlobe size={40} color="#5fb43d" />
                <Card.Body>
                  <Card.Title>Simple, Remote Process</Card.Title>
                  <Card.Text>
                    Apply and finalize your mortgage without visiting the UAE.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Who is this for Section */}
        <Row className="align-items-center flex-row-reverse ">
          <Col md={6}>
            <h3
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                color: "#1f2937",
              }}
            >
              We Work with Leading Developers:
            </h3>
            <p
              style={{
                color: "#4b5563",
                fontSize: "16px",
                marginBottom: "20px",
              }}
            >
              Emaar |Nakheel | Dubai Properties | Damac | Sobha | Ellington |
              Azizi and more From studio apartments to luxury villas, we cover
              it all.
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
              Why Easy Home Mortgage Premier?
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

      {/* CSS */}
      <style jsx>{`
        .main-wrapper {
          background: #fff;
          padding-bottom: 60px;
        }

        /* HERO */
        .hero {
          position: relative;
          border-radius: 20px;
          overflow: hidden;
        }

        .hero img {
          width: 100%;
          height: 400px;
          object-fit: cover;
          filter: brightness(0.7);
        }

        .hero-content {
          position: absolute;
          top: 50%;
          left: 40px;
          transform: translateY(-50%);
          color: #fff;
          max-width: 500px;
        }

        .hero-content h1 {
          font-weight: 700;
        }

        .hero-content span {
          color: #1855a5;
        }

        .cta {
          margin-top: 15px;
          background: #5fb43d;
          border: none;
          color: #000;
          font-weight: 600;
        }

        /* FLOATING CARD */
        .floating-card {
          margin-top: -60px;
          padding: 25px;
          border-radius: 16px;
          border: none;
          background: white;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.1);
        }

        .feature h6 {
          font-weight: 700;
        }

        .feature span {
          font-size: 13px;
          color: #777;
        }

        .divider {
          height: 1px;
          background: #eee;
          margin: 20px 0;
        }

        /* SECTIONS */
        .section {
          margin-top: 70px;
        }

        .muted {
          color: #888;
        }

        ul {
          list-style: none;
          padding: 0;
        }

        li {
          margin: 10px 0;
          display: flex;
          gap: 10px;
        }

        /* IMAGE BOX */
        .img-box {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
        }

        .img-box img {
          width: 100%;
          transition: 0.4s;
        }

        .img-box:hover img {
          transform: scale(1.08);
        }

        /* MOBILE */
        @media (max-width: 768px) {
          .hero-content {
            left: 20px;
          }

          .hero img {
            height: 300px;
          }

          .floating-card {
            margin-top: -40px;
          }
        }
      `}</style>
    </div>
  );
}
