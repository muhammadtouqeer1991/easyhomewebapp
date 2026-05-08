"use client";

import { Container, Row, Col } from "react-bootstrap";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";

export default function GetInTouchSection() {
  const contactInfo = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Location:",
      text: "Dubai | UAE",
    },
    {
      icon: <FaPhoneAlt />,
      title: "Phone:",
      text: "00971-2-5554039",
    },
    {
      icon: <FaEnvelope />,
      title: "Mail:",
      text: "info@easyhomemortgage.com",
    },
    {
      icon: <FaClock />,
      title: "Office Hours:",
      text: "Mon - Fri: 9:00am - 6:00pm",
    },
  ];

  return (
    <>
      <section className="contact-section">
        <Container>
          <Row className="align-items-center g-4">
            {/* Left Side */}
            <Col lg={4}>
              <div className="contact-content">
                <h2>Get in Touch</h2>

                {contactInfo.map((item, index) => (
                  <div className="contact-item" key={index}>
                    <div className="icon">{item.icon}</div>

                    <div className="content">
                      <h5>{item.title}</h5>
                      <p>{item.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* Right Side */}
            <Col lg={8}>
              <div className="map-wrapper">
                <iframe
                  title="Dubai Map"
                  src="https://www.google.com/maps?q=Dubai,UAE&output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .contact-section {
          background: #f5f5f5;
          padding: 80px 0;
        }

        .contact-content h2 {
          font-size: 36px;
          font-weight: 700;
          color: #111;
          margin-bottom: 35px;
        }

        .contact-item {
          display: flex;
          align-items: flex-start;
          gap: 15px;
          padding: 16px 0;
          border-bottom: 2px solid #b6d7a8;
        }

        .contact-item:last-child {
          border-bottom: none;
        }

        .icon {
          min-width: 42px;
          height: 42px;
          border-radius: 50%;
          background: #ffffff;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          color: #111;
          box-shadow: 0 4px 10px rgba(0, 0, 0, 0.06);
        }

        .content h5 {
          font-size: 16px;
          font-weight: 700;
          margin-bottom: 6px;
          color: #111;
        }

        .content p {
          margin: 0;
          font-size: 15px;
          color: #444;
          line-height: 1.7;
        }

        .map-wrapper {
          width: 100%;
          height: 100%;
          min-height: 360px;
          overflow: hidden;
          border-radius: 10px;
        }

        .map-wrapper iframe {
          width: 100%;
          height: 100%;
          min-height: 360px;
          border: 0;
          filter: grayscale(10%);
        }

        @media (max-width: 991px) {
          .contact-content h2 {
            font-size: 30px;
          }

          .map-wrapper {
            min-height: 300px;
          }
        }

        @media (max-width: 576px) {
          .contact-section {
            padding: 60px 0;
          }

          .contact-content h2 {
            font-size: 26px;
            margin-bottom: 25px;
          }

          .content h5 {
            font-size: 15px;
          }

          .content p {
            font-size: 14px;
          }
        }
      `}</style>
    </>
  );
}
