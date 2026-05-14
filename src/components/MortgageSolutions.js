"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FaArrowUp } from "react-icons/fa6";

const mortgageData = [
  {
    id: 1,
    title: "Residential Mortgages",
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Non-Residential Mortgages",
    image:
      "https://images.unsplash.com/photo-1600585154526-990dced4db0d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Self Employed Mortgage",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Developer-Based Mortgage",
    image:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 5,
    title: "Handover payment",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?q=80&w=1200&auto=format&fit=crop",
  },
  {
    id: 6,
    title: "Qood Resale Mortgage",
    image:
      "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function MortgageSolutions() {
  return (
    <>
      <section className="mortgage-solutions-section">
        <Container>
          {/* TOP HEADER */}
          <div className="top-header">
            <div>
              <h2>
                <span>Mortgage</span> Solutions Designed Around You
              </h2>

              <p>
                We offer expert guidance to help you find the best home loans in
                the UAE and simplify your mortgage process in Dubai and beyond.
              </p>
            </div>

            <button className="view-btn">View all</button>
          </div>

          {/* GRID */}
          <Row className="g-3">
            {mortgageData.map((item) => (
              <Col lg={4} md={6} key={item.id}>
                <div className="mortgage-card">
                  {/* IMAGE */}
                  <div className="image-wrapper">
                    <img src={item.image} alt={item.title} />

                    {/* TOP RIGHT ICON */}
                    <div className="arrow-icon">
                      <FaArrowUp />
                    </div>
                  </div>

                  {/* BOTTOM TITLE */}
                  <div className="card-footer-area">
                    <h4>{item.title}</h4>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .mortgage-solutions-section {
          background: #fff;
          padding: 30px 0;
        }

        .top-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          margin-bottom: 28px;
          gap: 20px;
        }

        .top-header h2 {
          font-size: 38px;
          font-weight: 700;
          color: #111;
          margin-bottom: 10px;
          line-height: 1.2;
        }

        .top-header h2 span {
          color: #6db84c;
        }

        .top-header p {
          font-size: 15px;
          color: #444;
          max-width: 850px;
          margin: 0;
        }

        .view-btn {
          background: transparent;
          border: 1px solid #111;
          color: #111;
          font-size: 13px;
          border-radius: 6px;
          min-width: 95px;
          height: 38px;
          font-weight: 500;
        }

        .view-btn:hover {
          background: #111;
          border-color: #111;
        }

        .mortgage-card {
          border-radius: 10px;
          overflow: hidden;
          background: #fff;
          transition: 0.3s ease;
          cursor: pointer;
        }

        .mortgage-card:hover {
          transform: translateY(-4px);
        }

        .image-wrapper {
          position: relative;
          height: 220px;
          overflow: hidden;
        }

        .image-wrapper img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
        }

        .arrow-icon {
          position: absolute;
          top: 10px;
          right: 10px;
          width: 28px;
          height: 28px;
          background: rgba(255, 255, 255, 0.95);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #111;
          font-size: 11px;
          transform: rotate(45deg);
        }

        .card-footer-area {
          background: #0057c8;
          padding: 13px 15px;
          text-align: center;
        }

        .card-footer-area h4 {
          color: #fff;
          font-size: 14px;
          margin: 0;
          font-weight: 500;
        }

        @media (max-width: 991px) {
          .top-header {
            flex-direction: column;
            align-items: flex-start;
          }

          .top-header h2 {
            font-size: 30px;
          }
        }

        @media (max-width: 576px) {
          .mortgage-solutions-section {
            padding: 40px 0;
          }

          .top-header h2 {
            font-size: 24px;
          }

          .top-header p {
            font-size: 14px;
          }

          .image-wrapper {
            height: 200px;
          }
        }
      `}</style>
    </>
  );
}
