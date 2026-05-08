"use client";

import { Container, Row, Col, Card } from "react-bootstrap";
import { FaRegCommentDots, FaHandshake, FaUsers } from "react-icons/fa";

export default function MortgageContactSection() {
  const cards = [
    {
      icon: <FaRegCommentDots />,
      title: "General enquiry",
      text: "Have a question or request? Drop us a message, and a haus & haus expert will get back to you shortly.",
      bg: "#dbe4f0",
    },
    {
      icon: <FaHandshake />,
      title: "Partnerships",
      text: "Let's explore collaboration opportunities. Reach out to discuss how we can work together",
      bg: "#dfead7",
    },
    {
      icon: <FaUsers />,
      title: "Our people",
      text: "Meet our diverse team of trusted property professionals and see what sets us apart.",
      bg: "#f2f2f2",
    },
  ];

  return (
    <>
      <section className="mortgage-section">
        <Container>
          <div className="heading-wrapper">
            <h2>Let’s Help You Find the Right Mortgage in Dubai</h2>

            <p>
              Whether you’re buying your first home, investing in property, or
              refinancing, our mortgage advisors are here to guide you every
              step of the way.
            </p>
          </div>

          <Row className="g-4 mt-2">
            {cards.map((card, index) => (
              <Col lg={4} md={6} key={index}>
                <Card
                  className="info-card border-0 h-100"
                  style={{ backgroundColor: card.bg }}
                >
                  <Card.Body className="text-center">
                    <div className="icon">{card.icon}</div>

                    <h4>{card.title}</h4>

                    <p>{card.text}</p>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .mortgage-section {
          background: #fff;
          padding: 80px 0;
        }

        .heading-wrapper {
          margin-bottom: 10px;
        }

        .heading-wrapper h2 {
          font-size: 36px;
          font-weight: 700;
          color: #111;
          margin-bottom: 18px;
          line-height: 1.3;
        }

        .heading-wrapper p {
          font-size: 16px;
          color: #555;
          max-width: 850px;
          line-height: 1.8;
          margin: 0;
        }

        .info-card {
          border-radius: 14px;
          padding: 28px 22px;
          transition: all 0.3s ease;
          min-height: 250px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .info-card:hover {
          transform: translateY(-5px);
        }

        .icon {
          width: 70px;
          height: 70px;
          background: rgba(255, 255, 255, 0.7);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0 auto 22px;
          font-size: 28px;
          color: #111;
        }

        .info-card h4 {
          font-size: 26px;
          font-weight: 700;
          color: #111;
          margin-bottom: 16px;
        }

        .info-card p {
          font-size: 15px;
          line-height: 1.8;
          color: #444;
          margin: 0;
        }

        @media (max-width: 991px) {
          .heading-wrapper h2 {
            font-size: 30px;
          }

          .info-card {
            min-height: auto;
          }
        }

        @media (max-width: 576px) {
          .mortgage-section {
            padding: 60px 0;
          }

          .heading-wrapper h2 {
            font-size: 24px;
          }

          .heading-wrapper p {
            font-size: 14px;
          }

          .info-card h4 {
            font-size: 22px;
          }
        }
      `}</style>
    </>
  );
}
