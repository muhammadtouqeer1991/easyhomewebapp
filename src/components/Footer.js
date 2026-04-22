"use client";
import { Container, Row, Col } from "react-bootstrap";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FiMail, FiCalendar, FiMapPin } from "react-icons/fi";

export default function Footer() {
  return (
    <footer style={{ background: "#f5f5f5", marginTop: "0px" }}>
      <Container className="py-5">
        <Row className="g-4">
          {/* Left Section */}
          <Col md={4}>
            <h4 className="fw-bold">EASY HOME MORTGAGE</h4>
            <small className="text-uppercase text-muted">
              You Deserve Premier Services
            </small>

            <p className="mt-3">
              Easy Home Mortgage Brokers offers tailored mortgage solutions that
              simplify the journey from property search to ownership.
            </p>

            <div className="d-flex gap-3 mt-3">
              <FaFacebookF />
              <FaInstagram />
              <FaXTwitter />
              <FaLinkedinIn />
            </div>
          </Col>

          {/* Quick Links */}
          <Col md={2} xs={6}>
            <h5 className="fw-bold">Quick Links</h5>
            <ul className="list-unstyled mt-3">
              <li>Home</li>
              <li>About Us</li>
              <li>Contact Us</li>
              <li>Our Team</li>
              <li>Calculator</li>
              <li>Blogs</li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3} xs={6}>
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled mt-3">
              <li>Resident Mortgage</li>
              <li>Non-Resident Mortgage</li>
              <li>Equity Release</li>
              <li>Golden Visa</li>
              <li>Property Investment</li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h5 className="fw-bold">Our Contact</h5>
            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center gap-2 mb-2">
                <FiMail /> info@easyhomemortgage.com
              </li>
              <li className="d-flex align-items-center gap-2 mb-2">
                <FiCalendar /> Mon - Fri 09:00 - 18:00
              </li>
              <li className="d-flex align-items-center gap-2">
                <FiMapPin /> Dubai, UAE
              </li>
            </ul>
          </Col>
        </Row>
      </Container>

      {/* Bottom Bar */}
      <div
        style={{
          background: "#5fb43d",
          color: "#fff",
          textAlign: "center",
          padding: "12px",
        }}
      >
        Easy Home Mortgage © All Rights Reserved @ 2026
      </div>
    </footer>
  );
}
