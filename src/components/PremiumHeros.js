"use client";

import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import styles from "./PremiumHero.module.css";
import Image from "next/image";

export default function PremiumHeros({
  slug,
  title,
  desc,
  btntext,
  btntext2,
  img,
}) {
  return (
    <section className={styles.hero}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={10}>
            <h1 className={styles.title2}>{title}</h1>

            <p className={`${styles.desc} m-0`}>{desc}</p>

            <div className="d-flex flex-wrap gap-2">
              <Button className={styles.btn}>{btntext}</Button>
              <Button className={styles.btn2}>{btntext2}</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
