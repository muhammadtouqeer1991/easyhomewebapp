"use client";

import { Container, Row, Col } from "react-bootstrap";
import { FaCheckCircle } from "react-icons/fa";
import styles from "./WhyChoose.module.css";

export default function WhychoosehandoverAbout2() {
  return (
    <section className={`${styles.section} py-4`}>
      <Container>
        <Row className="align-items-center g-5">
          {/* LEFT CONTENT */}
          <Col lg={6}>
            <h2 className={styles.title}>Who We Are</h2>

            <p className={styles.desc}>
              EasyHome Mortgages is a Dubai-based mortgage advisory company
              focused on simplifying the home financing journey for buyers
              across the UAE.
            </p>

            <p className={styles.desc}>
              We work closely with leading UAE banks and financial institutions
              to help our clients compare mortgage options, understand
              eligibility, and secure financing solutions tailored to their
              goals.
            </p>

            <p className={styles.desc}>
              Whether you are purchasing your first property, refinancing an
              existing mortgage, or investing in Dubai real estate — our team is
              committed to making the process smoother, faster, and more
              transparent.
            </p>
          </Col>

          {/* RIGHT IMAGE */}
          <Col lg={6}>
            <div className={styles.imageWrapper}>
              <img
                src="/whoweare.png"
                alt="Mortgage"
                className={styles.image}
              />
            </div>
          </Col>
          <Col lg={12}></Col>
        </Row>
      </Container>
    </section>
  );
}
