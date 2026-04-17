"use client";

import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FaHome, FaUsers, FaChartLine, FaGlobe } from "react-icons/fa";

const stats = [
  { icon: <FaHome />, number: "20+", label: "Experience" },
  { icon: <FaUsers />, number: "98", label: "Clients" },
  { icon: <FaChartLine />, number: "56", label: "Projects" },
  { icon: <FaGlobe />, number: "90", label: "Global" },
];

const CTASection = () => {
  return (
    <div className="cta-strip">
      <Container>
        <Row className="align-items-center">
          {/* LEFT TEXT */}
          <Col lg={4} className="mb-3 mb-lg-0">
            <h5>Ready to Find Your Dream Property?</h5>
          </Col>

          {/* STATS */}
          <Col lg={6}>
            <div className="stats-wrap">
              {stats.map((item, i) => (
                <div className="stat" key={i}>
                  <span className="icon">{item.icon}</span>
                  <div>
                    <strong>{item.number}</strong>
                    <small>{item.label}</small>
                  </div>
                </div>
              ))}
            </div>
          </Col>

          {/* BUTTON */}
          <Col lg={2} className="text-lg-end text-center mt-3 mt-lg-0">
            <Button className="cta-btn">Contact Now</Button>
          </Col>
        </Row>
      </Container>

      {/* CSS */}
      <style jsx>{`
        .cta-strip {
          padding: 25px 0;
          background: linear-gradient(135deg, #1855a5, #5fb43d);
          color: #fff;
          border-radius: 12px;
          margin: 40px 0;
        }

        h5 {
          margin: 0;
          font-weight: 600;
        }

        /* STATS */
        .stats-wrap {
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 15px;
        }

        .stat {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .icon {
          font-size: 18px;
          opacity: 0.9;
        }

        .stat strong {
          display: block;
          font-size: 16px;
          line-height: 1;
        }

        .stat small {
          font-size: 12px;
          opacity: 0.8;
        }

        /* BUTTON */
        .cta-btn {
          background: #fff;
          color: #1855a5;
          border: none;
          padding: 8px 18px;
          border-radius: 6px;
          font-weight: 600;
          transition: 0.3s;
        }

        .cta-btn:hover {
          background: #f1f1f1;
        }

        /* RESPONSIVE */
        @media (max-width: 768px) {
          .stats-wrap {
            justify-content: center;
          }

          .cta-strip {
            text-align: center;
          }
        }
      `}</style>
    </div>
  );
};

export default CTASection;
