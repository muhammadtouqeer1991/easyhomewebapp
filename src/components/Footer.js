"use client";
import Image from "next/image";
import Link from "next/link";
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
            <Image
              src="/brandLogo.svg"
              alt="Logo"
              width={280}
              height={90}
              priority
            />

            <small className="text-uppercase text-muted d-block pt-2">
              You Deserve Premier Services
            </small>

            <p className="mt-1">
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
              <li>
                <Link className="text-decoration-none text-dark" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/about-us"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/contact-us"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="#calculator"
                >
                  Calculator
                </Link>
              </li>
              <li>Blogs</li>
            </ul>
          </Col>

          {/* Services */}
          <Col md={3} xs={6}>
            <h5 className="fw-bold">Services</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/residential-mortgages"
                >
                  Residential Mortgage
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/non-resident-mortgage"
                >
                  Non-Resident Mortgage
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/equity-release"
                >
                  Equity Release
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/handover-payment"
                >
                  Handover payment
                </Link>
              </li>
              <li>
                <Link
                  className="text-decoration-none text-dark"
                  href="/seller-buyout"
                >
                  Seller Buyout
                </Link>
              </li>
            </ul>
          </Col>

          {/* Contact */}
          <Col md={3}>
            <h5 className="fw-bold">Our Contact</h5>
            <ul className="list-unstyled mt-3">
              <li className="d-flex align-items-center gap-2 mb-2">
                <FiMail /> info@easyhomemortgage.ae
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
          padding: "15px 20px",
        }}
      >
        <div className="container d-flex justify-content-between align-items-center flex-wrap">
          <span>
            © {new Date().getFullYear()} EasyHome Mortgages. All Rights
            Reserved.
          </span>

          <span>
            Experience designed by{" "}
            <strong>
              <Link
                className="text-white text-decoration-none"
                href="https://www.domatrics.com/"
              >
                Domatrics
              </Link>
            </strong>
          </span>
        </div>
      </div>
    </footer>
  );
}
