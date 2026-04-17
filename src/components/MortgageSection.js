"use client";
import { Container, Row, Col, Badge } from "react-bootstrap";
import styles from "./MortgageSection.module.css";

const logos = ["/adib.png", "/cbod.png", "/hsbc.png", "/sc.png"];

export default function MortgageSection() {
  return (
    <section className={styles.wrapper}>
      <Container>
        <Row className="align-items-center">
          {/* LEFT SIDE */}
          {/* <Col md={6}>
            <Badge bg="secondary" className={styles.badge}>
              Mortgages
            </Badge>
            <h1 className={styles.heading}>
              We’re the leading mortgage provider in the UAE
            </h1>
          </Col> */}

          {/* RIGHT SIDE */}
          <Col md={12}>
            <div className={styles.slider}>
              <div className={styles.slideTrack}>
                {logos.concat(logos).map((logo, i) => (
                  <div className={styles.slide} key={i}>
                    <img src={logo} alt="bank logo" />
                  </div>
                ))}
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
