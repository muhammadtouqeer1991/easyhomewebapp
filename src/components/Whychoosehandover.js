"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./WhyChoose.module.css";

export default function Whychoosehandover() {
  const keyFeatures = [
    "Up to 80% financing for property purchases",
    "Low-doc mortgage options tailored to your business model",
    "Flexible eligibility even without salary slips or fixed monthly income",
    "Competitive interest rates and exclusive lender tie-ups",
    "Fast-track approvals with Windsor’s assisted documentation process",
  ];

  const whyeasyhome = [
    "Fast coordination with developers and banks",
    "Expert advice on eligible lenders for handover stage",
    "Complete process management from approval to disbursal",
    "Dedicated mortgage specialist to guide you",
  ];

  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT */}
          <Col lg={6}>
            <span className={styles.badge}>Handover Payment</span>

            <h2 className={styles.title}>
              What is a Handover Payment Mortgage?
            </h2>

            <p className={styles.desc}>
              A handover mortgage is a bank-financed solution to cover the
              remaining balance due at the time of property completion. It’s
              commonly used for off-plan properties where the buyer has paid in
              instalments during construction, and the final lump sum is due at
              handover.
            </p>

            <div className={styles.list}>
              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>
                  You bought an off-plan property and paid 60–70% during
                  construction
                </span>
              </div>

              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>
                  The remaining balance (30–40%) is now due at handover
                </span>
              </div>

              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>
                  You want to finance the final payment instead of using cash
                </span>
              </div>

              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>
                  You prefer to convert it into an easy monthly instalment plan
                </span>
              </div>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className={styles.imageWrapper}>
              <img
                src="/whyhandover.webp"
                alt="Mortgage"
                className={styles.image}
              />

              {/* Floating Card */}
              <div className={styles.floatingCard}>
                <h5>98%</h5>
                <p>Approval Rate</p>
              </div>
            </div>
          </Col>
          <Col lg={12}></Col>
        </Row>

        <Row className="align-items-center mb-5">
          <Col md={6}>
            <h3
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                color: "#1f2937",
              }}
            >
              Key Features:
            </h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              {keyFeatures.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <FaCheckCircle
                    color="#4ade80"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Col>
          <Col md={6}>
            <h3
              style={{
                fontWeight: "700",
                marginBottom: "20px",
                color: "#1f2937",
              }}
            >
              Why Easy Home Mortgage?
            </h3>
            <ul style={{ listStyle: "none", padding: 0, lineHeight: "2" }}>
              {whyeasyhome.map((item, idx) => (
                <li
                  key={idx}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "12px",
                  }}
                >
                  <FaCheckCircle
                    color="#4ade80"
                    style={{ marginRight: "10px" }}
                  />{" "}
                  {item}
                </li>
              ))}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
