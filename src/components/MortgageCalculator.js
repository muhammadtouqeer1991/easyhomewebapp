"use client";
import { useState } from "react";
import { Form, Row, Col, Card, Button, InputGroup } from "react-bootstrap";
import { FaCalculator } from "react-icons/fa";

export default function MortgageCalculator() {
  const [loan, setLoan] = useState(3000000);
  const [rate, setRate] = useState(4.71);
  const [years, setYears] = useState(25);

  const monthlyRate = rate / 100 / 12;
  const totalMonths = years * 12;

  const monthlyPayment =
    (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -totalMonths));

  return (
    <div className="MortgageCalculator pb-3">
      <div className="container ">
        {/* HEADER */}
        {/* <div className="text-start mb-4">
        <h3 className="fw-bold mb-0">Mortgage Calculator</h3>
        <p className="text-muted mb-0">
          Quickly estimate your monthly mortgage payments and plan your finances
          with real-time calculations
        </p>
      </div> */}

        <Card className="p-3 shadow-lg  rounded-4 border-0">
          <Row className="align-items-center g-3">
            <Col md={3}>
              <Form.Label className="small text-muted mb-1">
                Loan Amount
              </Form.Label>
              <Form.Control
                type="number"
                value={loan}
                onChange={(e) => setLoan(Number(e.target.value))}
                className="shadow-sm"
              />
            </Col>

            {/* RATE */}
            <Col md={3}>
              <Form.Label className="small text-muted mb-1">
                Interest Rate
              </Form.Label>

              <div className="d-flex align-items-center gap-2">
                <Form.Range
                  min={1}
                  max={15}
                  step={0.1}
                  value={rate}
                  onChange={(e) => setRate(Number(e.target.value))}
                  className="flex-grow-1"
                />

                <span className="fw-semibold small bg-light px-2 py-1 rounded">
                  {rate}%
                </span>
              </div>
            </Col>

            {/* YEARS */}
            <Col md={3}>
              <Form.Label className="small text-muted mb-1">
                Duration
              </Form.Label>

              <div className="d-flex align-items-center gap-2">
                <Form.Range
                  min={1}
                  max={30}
                  value={years}
                  onChange={(e) => setYears(Number(e.target.value))}
                  className="flex-grow-1"
                />

                <span className="fw-semibold small bg-light px-3 py-1 rounded">
                  {years} yrs
                </span>
              </div>
            </Col>

            {/* RESULT */}
            <Col md={3}>
              <div className="text-center p-2 bg-light rounded-3">
                <div className="small text-muted">
                  Monthly{" "}
                  <span className="fw-bold fs-5">
                    {Math.round(monthlyPayment).toLocaleString()}
                  </span>
                </div>
                <small>AED</small>
              </div>
            </Col>
          </Row>
        </Card>
      </div>
    </div>
  );
}
