// components/TrustedHomebuyersSection.jsx

"use client";

import React from "react";
import { FaQuoteLeft } from "react-icons/fa";

export default function TrustedHomebuyersSection() {
  const testimonials = [
    {
      name: "Mohammed A.",
      text: "EasyHome Mortgages helped us secure a better rate and guided us throughout the entire process.",
      bg: "#dfe8f7",
    },
    {
      name: "Jessica T.",
      text: "Very transparent and professional team. The process was smooth from start to finish.",
      bg: "#e7f1e4",
    },
    {
      name: "Mohammed A.",
      text: "EasyHome Mortgages helped us secure a better rate and guided us throughout the entire process.",
      bg: "#dfe8f7",
    },
  ];

  return (
    <>
      <section className="trusted-section">
        <div className="container">
          <div className="heading-wrapper">
            <h2>
              Trusted by <span className="highlight">Homebuyers </span>
              Across Dubai
            </h2>

            <p>
              No Matter Your Profile, We Help You Find the Right{" "}
              <span className="mortgage-text">Mortgage</span>
            </p>
          </div>

          <div className="row g-4 testimonial-row">
            {testimonials.map((item, index) => (
              <div className="col-md-4" key={index}>
                <div
                  className="testimonial-card"
                  style={{ backgroundColor: item.bg }}
                >
                  <div className="user-badge">
                    <FaQuoteLeft className="quote-icon" />
                    {item.name}
                  </div>

                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style jsx>{`
        .trusted-section {
          padding: 40px 20px;
          padding-top: 0;
          background: #ffffff;
          font-family: Arial, sans-serif;
        }

        .heading-wrapper {
          margin-bottom: 25px;
        }

        .heading-wrapper h2 {
          font-size: 40px;
          font-weight: 800;
          color: #000;
          margin-bottom: 10px;
          line-height: 1.3;
        }

        .highlight {
          color: #074dab;
          text-decoration-thickness: 3px;
        }

        .heading-wrapper p {
          font-size: 19px;
          color: #000;
          margin: 0;
        }

        .mortgage-text {
          color: #6bbf59;
          font-weight: 500;
        }

        .testimonial-row {
          margin-top: 20px;
        }

        .testimonial-card {
          border-radius: 8px;
          padding: 20px;
          min-height: 155px;
          position: relative;
          transition: 0.3s ease;
        }

        .testimonial-card:hover {
          transform: translateY(-3px);
        }

        .user-badge {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: #fff;
          padding: 6px 14px;
          border-radius: 6px;
          font-size: 13px;
          font-weight: 500;
          color: #222;
          margin-bottom: 16px;
          box-shadow: 0 1px 3px rgba(0, 0, 0, 0.08);
          transform: translate(-21px, 0px);
        }

        .quote-icon {
          color: #666;
          font-size: 12px;
        }

        .testimonial-card p {
          font-size: 14px;
          line-height: 1.6;
          color: #222;
          margin: 0;
        }

        @media (max-width: 768px) {
          .heading-wrapper h2 {
            font-size: 26px;
          }

          .testimonial-card {
            min-height: auto;
          }
        }
      `}</style>
    </>
  );
}
