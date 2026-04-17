"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./WhyChoose.module.css";

export default function WhyChoose() {
  return (
    <section className={styles.section}>
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT */}
          <Col lg={6}>
            <span className={styles.badge}>Why Choose Us</span>

            <h2 className={styles.title}>
              Why Choose a Resident Mortgage in the UAE?
            </h2>

            <p className={styles.desc}>
              As a resident of the UAE, you’re eligible for
            </p>

            <div className={styles.list}>
              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>Ccompetitive mortgage options with attractive rates</span>
              </div>

              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>Higher loan-to-value (LTV) ratios</span>
              </div>

              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>Flexible repayment terms</span>
              </div>

              <div className={styles.item}>
                <FaCheckCircle className={styles.icon} />
                <span>Support for salaried & self-employed</span>
              </div>
            </div>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className={styles.imageWrapper}>
              <img
                src="/whychooseImg.jpg"
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
          <Col lg={12}>
            <p>
              Whether you’re salaried or self-employed, our expert mortgage
              advisors help you navigate the process with clarity and
              confidence. We offer a free consultation to assess your mortgage
              eligibility and guide you through your options. Whether you’re
              exploring fixed-rate, variable, or Islamic finance products, our
              team ensures you secure the best deal—tailored just for you.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
