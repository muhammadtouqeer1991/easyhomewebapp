"use client";

import { Container, Row, Col, Breadcrumb, Button } from "react-bootstrap";
import { FaHome } from "react-icons/fa";
import styles from "./PremiumHero.module.css";
import Image from "next/image";

export default function PremiumHero({ slug, title, desc, btntext, img }) {
  return (
    <section className={styles.hero}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT CONTENT */}
          <Col lg={8}>
            <Breadcrumb className={styles.breadcrumb}>
              <Breadcrumb.Item href="/">
                <FaHome className={styles.icon} />
              </Breadcrumb.Item>
              <Breadcrumb.Item active>{slug}</Breadcrumb.Item>
            </Breadcrumb>

            <h1 className={styles.title}>{title}</h1>

            <p className={styles.desc}>{desc}</p>

            <Button className={styles.btn}>{btntext}</Button>
          </Col>

          {/* RIGHT DESIGN ELEMENT */}
          <Col lg={4} className="d-none d-lg-block">
            <div className={styles.designBox}>
              <div className={styles.circle}></div>
              <div className={styles.circleSmall}></div>
              <Image
                src={img}
                alt="Alt"
                width={300}
                height={300}
                style={{ objectFit: "cover" }}
              />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
