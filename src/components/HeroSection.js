"use client";
import Link from "next/link";
import React from "react";
import { Container, Button } from "react-bootstrap";
import { FaArrowRight, FaCheckCircle } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div className="hero-section">
      <div className="overlay"></div>

      <Container className="hero-content">
        <div className="text-area">
          <h1>
            Own Your <span>Dream Home</span> in Dubai — The Easy Way
          </h1>

          <p>
            EasyHome Mortgages helps you secure the best home loans in the UAE
            with expert guidance, fast approvals, and zero confusion.
          </p>

          <div className="btn-group">
            <button className="cta">
              Get Free Consultation <FaArrowRight />
            </button>

            <button className="cta2">Check Your Eligibility</button>
          </div>
        </div>
      </Container>

      {/* Internal CSS */}
      <style jsx>{`
        /* CTA */
        .cta {
          margin-top: 10px;
          background: var(--primary);
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
        .cta2 {
          margin-top: 10px;
          background: transparent;
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
          border: 1px solid #fff;
        }
        .hero-section {
          width: 100%;
          height: 90vh;
          background-image: url("/sliderBg.webp"); /* change image path */
          background-size: cover;
          background-position: center;
          position: relative;
          display: flex;
          align-items: flex-end;
          padding-bottom: 4rem;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          color: #fff;
        }

        .text-area {
          //   max-width: 1150px;
        }

        .text-area h1 {
          font-size: 35px;
          font-weight: 700;
          line-height: 1.2;
          color: #fff;
        }

        .text-area h1 span {
          color: #59b045cc;
        }

        .text-area p {
          margin-top: 15px;
          font-size: 20px;
          color: #fff;
        }

        .btn-group {
          margin-top: 15px;
          display: flex;
          gap: 15px;
          flex-wrap: wrap;
          width: fit-content;
        }

        .btn-green {
          background: #22c55e;
          border: none;
          padding: 10px 18px;
          font-weight: 500;
        }

        .btn-green:hover {
          background: #16a34a;
        }

        .btn-outline {
          background: transparent;
          border: 1px solid #fff;
          padding: 10px 18px;
          color: #fff;
        }

        .btn-outline:hover {
          background: #fff;
          color: #000;
        }

        /* Responsive */
        @media (max-width: 768px) {
          .text-area h1 {
            font-size: 30px;
          }

          .hero-section {
            height: 75vh;
          }
        }
      `}</style>
    </div>
  );
};

export default HeroSection;
