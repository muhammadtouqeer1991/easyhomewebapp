"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FaKey, FaCheckCircle, FaHome, FaUniversity } from "react-icons/fa";

export default function PropertyFinanceSection() {
  return (
    <>
      <section className="finance-section">
        <Container>
          <Row className="align-items-center">
            {/* Content FIRST (desktop reverse feel) */}
            <Col lg={6} className="order-lg-1 order-2">
              <div className="content-card">
                <span className="tag">Final Payment Support</span>

                <h2>
                  Near Property Completion?
                  <br />
                  <span>Need Help With the Final Payment?</span>
                </h2>

                <p>
                  If your property is nearing completion and you need funding to
                  make the handover or final instalment, Windsor Premier
                  Mortgage Brokers offers fast, reliable mortgage solutions
                  designed specifically for handover payment financing.
                </p>

                <div className="features">
                  <div>
                    <FaHome /> Developer Coordination
                  </div>
                  <div>
                    <FaUniversity /> Bank Processing Support
                  </div>
                  <div>
                    <FaCheckCircle /> Fast Disbursal
                  </div>
                </div>

                <p className="last-text">
                  We coordinate with your developer and bank to ensure a smooth
                  disbursal — so you can complete your purchase and take
                  possession on time.
                </p>

                <Button className="custom-btn">
                  Get Financing Help <FaKey className="ms-2" />
                </Button>
              </div>
            </Col>

            {/* Image Side */}
            <Col lg={6} className="order-lg-2 order-1 mb-4 mb-lg-0">
              <div className="image-wrapper">
                <div className="bg-shape"></div>

                <img
                  src="/mortgagehover.webp"
                  alt="Property Key Handover"
                  className="img-fluid main-img"
                />

                <div className="floating-badge">
                  <FaKey /> Handover Ready
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Internal CSS */}
      <style jsx>{`
        .finance-section {
          padding: 100px 0;
          background: linear-gradient(135deg, #f8f8f8, #f8f8f8);
        }

        /* IMAGE SIDE */
        .image-wrapper {
          position: relative;
          text-align: center;
        }

        .bg-shape {
          position: absolute;
          width: 80%;
          height: 80%;
          background: linear-gradient(135deg, #0d6efd, #00b4d8);
          border-radius: 30px;
          top: -20px;
          left: -20px;
          z-index: 0;
          opacity: 0.15;
        }

        .main-img {
          position: relative;
          border-radius: 20px;
          z-index: 1;
          box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
          transition: 0.4s;
        }

        .image-wrapper:hover .main-img {
          transform: scale(1.04);
        }

        .floating-badge {
          position: absolute;
          bottom: -15px;
          right: 30px;
          background: #fff;
          padding: 10px 18px;
          border-radius: 30px;
          font-size: 14px;
          font-weight: 600;
          box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
          display: flex;
          align-items: center;
          gap: 8px;
        }

        /* CONTENT */
        .content-card {
          background: #fff;
          padding: 40px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
        }

        .tag {
          display: inline-block;
          background: #e7f1ff;
          color: #1855a5;
          padding: 6px 14px;
          border-radius: 20px;
          font-size: 13px;
          margin-bottom: 15px;
          font-weight: 600;
        }

        .content-card h2 {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 20px;
        }

        .content-card h2 span {
          color: #5fb43d;
        }

        .content-card p {
          color: #555;
          line-height: 1.7;
        }

        .features {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 10px;
          margin: 20px 0;
        }

        .features div {
          background: #f8fbff;
          padding: 10px 15px;
          border-radius: 10px;
          font-size: 14px;
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .last-text {
          margin-top: 10px;
        }

        .custom-btn {
          margin-top: 20px;
          padding: 12px 25px;
          border-radius: 30px;
          background: linear-gradient(45deg, #0d6efd, #00b4d8);
          border: none;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          transition: 0.3s;
        }

        .custom-btn:hover {
          transform: translateY(-3px);
          box-shadow: 0 10px 25px rgba(13, 110, 253, 0.3);
        }

        @media (max-width: 768px) {
          .content-card {
            padding: 25px;
          }

          .content-card h2 {
            font-size: 24px;
          }

          .features {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </>
  );
}
