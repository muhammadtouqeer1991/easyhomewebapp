"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./WhyChoose.module.css";

export default function WhychoosehandoverAbout() {
  return (
    <section className={`${styles.section} py-4`}>
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
      </Container>
    </section>
  );
}
