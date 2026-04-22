"use client";
import { Container, Row, Col, Button } from "react-bootstrap";
import { FiMail } from "react-icons/fi";
import styles from "./Readyunlock.module.css";

export default function MeetingCTA() {
  return (
    <div className="cta-wrapper">
      <Container className="d-flex justify-content-center">
        <div className="cta-box w-100">
          <Row className="align-items-center text-center text-md-start">
            <Col md={6}>
              <h2 className="cta-title">Book A Virtual Meeting</h2>
              <p className="fs-6 text-white m-0">
                Reliable Sustainable Provider
              </p>
            </Col>

            <Col md={6} className="text-end">
              <div className={`${styles.buttons} readyflex`}>
                <Button className={styles.primaryBtn}>Get your mortgage</Button>

                <Button variant="light" className={styles.secondaryBtn}>
                  Find your property
                </Button>
              </div>
            </Col>
          </Row>
        </div>
      </Container>
    </div>
  );
}
