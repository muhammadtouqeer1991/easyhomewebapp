// components/UaeProperty.jsx
"use client";
import React from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import {
  FaHome,
  FaPercentage,
  FaGlobe,
  FaLaptopCode,
  FaUserTie,
  FaCheckCircle,
} from "react-icons/fa";

const UaeProperty = () => {
  return (
    <Container
      style={{
        fontFamily: "'Segoe UI', sans-serif",
        padding: "60px 20px",
      }}
    >
      <h2
        style={{ textAlign: "center", marginBottom: "20px", color: "#2c3e50" }}
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
        Explore world-class real estate investment opportunities in Dubai, Abu
        Dhabi, and across the Emirates, with expert guidance and seamless
        mortgage solutions for non-residents.
      </p>

      {/* Highlight Cards */}
      <Row className="mb-5">
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
                Up to 65% financing depending on nationality and property type.
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

      {/* Why Windsor Section */}
      <Card
        style={{
          background: "linear-gradient(135deg, #5fb43d, #628fca)",
          color: "#fff",
          borderRadius: "25px",
          padding: "40px 30px",
          textAlign: "center",
          boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
          transition: "transform 0.3s, box-shadow 0.3s",
        }}
        className="why-windsor-card"
      >
        <Card.Title
          style={{
            fontWeight: "800",
            fontSize: "1.8rem",
            marginBottom: "30px",
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          Why Choose Easy Home Premier?
        </Card.Title>
        <ul
          className="cardpremier"
          style={{
            listStyle: "none",
            padding: 0,
            lineHeight: "2.2",
            fontSize: "16px",
          }}
        >
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <FaHome size={22} style={{ marginRight: "12px", color: "#fff" }} />
            Access to Leading UAE Banks with Non-Resident Products
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <FaGlobe size={22} style={{ marginRight: "12px", color: "#fff" }} />
            Exclusive Mortgage Offers for Overseas Investors
          </li>
          <li
            style={{
              display: "flex",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <FaLaptopCode
              size={22}
              style={{ marginRight: "12px", color: "#fff" }}
            />
            Remote Processing of mortgage with Digital Support
          </li>
          <li style={{ display: "flex", alignItems: "center" }}>
            <FaUserTie
              size={22}
              style={{ marginRight: "12px", color: "#fff" }}
            />
            Dedicated Relationship Manager Throughout
          </li>
        </ul>
      </Card>

      {/* Bottom Section */}
      <Row
        className="mt-5 align-items-center"
        style={{
          borderRadius: "20px",
          padding: "20px 40px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <Col md={6} style={{ paddingRight: "30px" }}>
          <h4
            style={{
              fontWeight: "700",
              marginBottom: "20px",
              color: "#2c3e50",
            }}
          >
            No UAE Visit Needed for Pre-Approval
          </h4>
          <p
            style={{ color: "#4b4b4b", fontSize: "16px", marginBottom: "20px" }}
          >
            Open a bank account, secure financing, and register your
            property—all with our end-to-end concierge mortgage service.
          </p>
          <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <FaCheckCircle color="#5fb43d" style={{ marginRight: "10px" }} />{" "}
              Competitive mortgage options with attractive rates
            </li>
            <li
              style={{
                display: "flex",
                alignItems: "center",
                marginBottom: "12px",
              }}
            >
              <FaCheckCircle color="#5fb43d" style={{ marginRight: "10px" }} />{" "}
              Higher loan-to-value (LTV) ratios
            </li>
            <li style={{ display: "flex", alignItems: "center" }}>
              <FaCheckCircle color="#5fb43d" style={{ marginRight: "10px" }} />{" "}
              Flexible repayment terms
            </li>
          </ul>
          <Button
            style={{
              marginTop: "20px",
              padding: "10px 35px",
              fontWeight: "600",
              borderRadius: "10px",
              backgroundColor: "#1855a5",
            }}
          >
            Learn More
          </Button>
        </Col>

        <Col md={6} style={{ position: "relative" }}>
          <img
            src="/newWebimg.webp"
            alt="Happy Family"
            style={{
              width: "110%",
              borderRadius: "20px",
              objectFit: "cover",
              position: "relative",
              left: "-20px",
              boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
            }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UaeProperty;
