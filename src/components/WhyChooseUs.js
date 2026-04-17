"use client";

import Image from "next/image";
import { Container, Row, Col } from "react-bootstrap";
import { FaArrowRight } from "react-icons/fa";

export default function WhyChooseUs() {
  return (
    <section className="why-editorial">
      <Container>
        <Row className="align-items-center gy-5">
          {/* LEFT CONTENT */}
          <Col lg={6}>
            <div className="kicker">WHY CHOOSE US</div>

            <h2>
              Mortgage Experience <br />
              Reimagined for Modern Users
            </h2>

            <p className="lead">
              We don’t just process mortgages — we redesign how you experience
              financing with speed, clarity, and intelligent automation.
            </p>

            {/* STEPS */}
            <div className="steps">
              <div className="step">
                <span className="num">01</span>
                <div>
                  <h5>Smart Eligibility Check</h5>
                  <p>Instant analysis based on your profile.</p>
                </div>
              </div>

              <div className="step">
                <span className="num">02</span>
                <div>
                  <h5>Best Lender Match</h5>
                  <p>AI finds the most suitable mortgage options.</p>
                </div>
              </div>

              <div className="step">
                <span className="num">03</span>
                <div>
                  <h5>Fast Approval Flow</h5>
                  <p>Minimal paperwork, maximum speed.</p>
                </div>
              </div>
            </div>

            <button className="cta">
              Get Started <FaArrowRight />
            </button>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className="visual">
              <div className="bg-shape"></div>

              <div className="image-card">
                <Image
                  src="/whychoose.webp"
                  width={700}
                  height={700}
                  alt="Why Choose Us"
                />
              </div>

              <div className="floating-tag t1">Fast Approval</div>
              <div className="floating-tag t2">Low Rates</div>
            </div>
          </Col>
        </Row>
      </Container>

      <style jsx>{`
        :root {
          --primary: #5fb43d;
          --secondary: #1855a5;
        }

        .why-editorial {
          padding: 50px 0;
          position: relative;
        }

        /* LEFT */
        .kicker {
          font-size: 12px;
          letter-spacing: 2px;
          color: var(--primary);
          font-weight: 700;
          margin-bottom: 12px;
        }

        h2 {
          font-size: 3rem;
          font-weight: 800;
          color: #0f172a;
          line-height: 1.1;
        }

        .lead {
          margin-top: 15px;
          color: #64748b;
          font-size: 16px;
          line-height: 1.7;
        }

        /* STEPS */
        .steps {
          margin-top: 35px;
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .step {
          display: flex;
          gap: 15px;
          align-items: flex-start;
          padding: 14px 16px;
          border-left: 3px solid var(--primary);
          transition: 0.3s ease;
        }

        .step:hover {
          border-left: 3px solid var(--secondary);
          transform: translateX(6px);
        }

        .num {
          font-size: 14px;
          font-weight: 800;
          color: var(--primary);
          min-width: 40px;
        }

        .step h5 {
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #000;
        }

        .step p {
          margin: 3px 0 0;
          font-size: 13px;
          color: #64748b;
        }

        /* CTA */
        .cta {
          margin-top: 30px;
          background: var(--secondary);
          color: white;
          border: none;
          padding: 12px 18px;
          border-radius: 10px;
          font-weight: 600;
          display: inline-flex;
          gap: 10px;
          align-items: center;
          cursor: pointer;
          transition: 0.3s;
        }

        .cta:hover {
          transform: translateY(-3px);
          background: var(--primary);
        }

        /* RIGHT VISUAL */
        .visual {
          position: relative;
          display: flex;
          justify-content: center;
        }

        .bg-shape {
          position: absolute;
          width: 420px;
          height: 420px;
          background: radial-gradient(
            circle,
            rgba(24, 85, 165, 0.15),
            transparent 70%
          );
          z-index: 0;
        }

        .image-card {
          position: relative;
          z-index: 2;
          border-radius: 24px;
          overflow: hidden;
          box-shadow: 0 30px 80px rgba(0, 0, 0, 0.12);
          transform: rotate(-2deg);
          transition: 0.4s ease;
        }

        .image-card:hover {
          transform: rotate(0deg) scale(1.03);
        }

        .floating-tag {
          position: absolute;
          background: white;
          padding: 10px 14px;
          border-radius: 12px;
          font-size: 12px;
          font-weight: 600;
          box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
          z-index: 3;
          animation: float 3s ease-in-out infinite;
        }

        .t1 {
          top: 40px;
          left: -20px;
          color: var(--primary);
        }

        .t2 {
          bottom: 50px;
          right: -10px;
          color: var(--secondary);
          animation-delay: 1.5s;
        }

        @keyframes float {
          0% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
          100% {
            transform: translateY(0);
          }
        }

        @media (max-width: 768px) {
          h2 {
            font-size: 2.2rem;
          }

          .image-card {
            transform: none;
          }
        }
      `}</style>
    </section>
  );
}
