"use client";

import { Container, Row, Col, Button } from "react-bootstrap";
import { FaKey } from "react-icons/fa";
import styles from "./Readyunlock.module.css";

export default function Readyunlock() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          <Col md={6}>
            <h1 className={styles.heading}>
              Ready to unlock your future home?
            </h1>
            <p className="m-0">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Perferendis, nesciunt velit necessitatibus odit laboriosam fugiat
              qui
            </p>
          </Col>

          {/* RIGHT SIDE */}
          <Col md={6} className="text-end">
            <div className={styles.buttons}>
              <Button className={styles.primaryBtn}>Get your mortgage</Button>

              <Button variant="light" className={styles.secondaryBtn}>
                Find your property
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
