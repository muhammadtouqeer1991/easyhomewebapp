"use client";

import { Container, Row, Col, Form, Button } from "react-bootstrap";

export default function MortgageJourney() {
  const steps = [
    {
      step: "Step 1",
      title: "Submit Your Details",
      desc: "Fill out a quick application form online.",
    },
    {
      step: "Step 2",
      title: "Compare Mortgage Options",
      desc: "We match you with suitable bank offers.",
    },
    {
      step: "Step 3",
      title: "Get Approved",
      desc: "Our advisors help streamline documentation & approvals.",
    },
    {
      step: "Step 4",
      title: "Secure Your Property",
      desc: "Move ahead confidently with expert support.",
    },
  ];

  return (
    <>
      <section className="mortgage-wrapper">
        <Container>
          {/* HEADING */}
          <div className="heading-wrapper">
            <h2>
              Start Your <span>Mortgage</span> Journey in Minutes
            </h2>

            <p>
              Complete the quick form below and our mortgage advisors will help
              you find the best financing options tailored to your needs.
            </p>
          </div>

          <Row className="align-items-start">
            {/* LEFT */}
            <Col lg={6}>
              <div className="steps-wrapper">
                {steps.map((item, index) => (
                  <div className="step-item" key={index}>
                    {/* STEP NUMBER */}
                    <div className="step-left">
                      <span>{item.step}</span>

                      {index !== steps.length - 1 && (
                        <div className="line"></div>
                      )}
                    </div>

                    {/* CONTENT */}
                    <div className="step-right">
                      <h4>{item.title}</h4>
                      <p>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Col>

            {/* RIGHT FORM */}
            <Col lg={6}>
              <div className="form-wrapper">
                <Form>
                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="input-field form-control"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      placeholder="Phone"
                      className="input-field form-control"
                    />
                  </Form.Group>

                  <Form.Group className="mb-3">
                    <input
                      type="text"
                      placeholder="Monthly Income"
                      className="input-field form-control"
                    />
                  </Form.Group>

                  <Form.Group className="mb-4">
                    <input
                      type="text"
                      placeholder="Property Budget"
                      className="input-field form-control"
                    />
                  </Form.Group>

                  <button className="consult-btn">Get Free Consultation</button>

                  <div className="secure-text">
                    Your information is secure & confidential
                  </div>
                </Form>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <style jsx>{`
        .mortgage-wrapper {
          background: #fff;
          padding: 45px 0 55px;
        }

        .heading-wrapper {
          margin-bottom: 38px;
        }

        .heading-wrapper h2 {
          font-size: 26px;
          font-weight: 700;
          color: #111;
          margin-bottom: 8px;
          line-height: 1.2;
          letter-spacing: -0.3px;
        }

        .heading-wrapper h2 span {
          color: #74bc4d;
        }

        .heading-wrapper p {
          font-size: 13px;
          color: #222;
          margin: 0;
          line-height: 1.5;
          font-weight: 400;
        }

        /* LEFT SIDE */
        .steps-wrapper {
          padding-right: 35px;
        }

        .step-item {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          margin-bottom: 26px;
          position: relative;
        }

        .step-left {
          width: 48px;
          position: relative;
          text-align: right;
          flex-shrink: 0;
        }

        .step-left span {
          color: #0057c8;
          font-size: 13px;
          font-weight: 700;
          position: relative;
          top: 1px;
        }

        .line {
          position: absolute;
          top: 24px;
          right: -10px;
          width: 5px;
          height: 60px;
          background: #59b045;
        }

        .step-right h4 {
          font-size: 22px;
          font-weight: 700;
          color: #000;
          margin-bottom: 6px;
          line-height: 1.2;
        }

        .step-right p {
          margin: 0;
          font-size: 17px;
          color: #000;
          line-height: 1.5;
        }

        /* FORM */
        .form-wrapper {
          padding-left: 15px;
        }
        .form-wrapper .form-control {
          background: #f5f5f5;
        }
        .input-field {
          height: 38px;
          border: none;
          border-radius: 3px;
          font-size: 12px;
          color: #111;
          box-shadow: none !important;
          padding: 0 12px;
        }

        .input-field::placeholder {
          color: #8d8d8d;
        }

        .consult-btn {
          width: 100%;
          height: 42px;
          background: #0057c8;
          border: none;
          border-radius: 3px;
          font-size: 12px;
          font-weight: 500;
          margin-bottom: 10px;
          color: #fff;
        }

        .consult-btn:hover {
          background: #004ab0;
        }

        .secure-text {
          text-align: center;
          font-size: 14px;
          color: #000;
          font-style: italic;
        }

        @media (max-width: 991px) {
          .steps-wrapper {
            padding-right: 0;
            margin-bottom: 35px;
          }

          .form-wrapper {
            padding-left: 0;
          }
        }

        @media (max-width: 576px) {
          .mortgage-wrapper {
            padding: 40px 0;
          }

          .heading-wrapper h2 {
            font-size: 22px;
          }

          .heading-wrapper p {
            font-size: 13px;
          }

          .step-right h4 {
            font-size: 16px;
          }

          .step-right p {
            font-size: 13px;
          }
        }
      `}</style>
    </>
  );
}
