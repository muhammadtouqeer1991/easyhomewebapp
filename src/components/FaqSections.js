// components/FaqSections.jsx

"use client";

import React from "react";
import Accordion from "react-bootstrap/Accordion";
import { FiChevronDown } from "react-icons/fi";

export default function FaqSections() {
  const faqs = [
    {
      question: "How much mortgage can I get in Dubai?",
      answer:
        "The mortgage amount depends on your salary, financial profile, and UAE bank eligibility criteria.",
    },
    {
      question: "Can expats apply for mortgages in the UAE?",
      answer:
        "Yes. UAE residents and overseas investors can apply for mortgage financing through approved UAE banking partners.",
    },
    {
      question: "What is mortgage pre-approval?",
      answer:
        "Mortgage pre-approval is an initial approval from the bank showing how much financing you may qualify for.",
    },
    {
      question: "How long does mortgage approval take?",
      answer:
        "Mortgage approval usually takes between 3 to 7 working days depending on documentation and bank processing.",
    },
    {
      question: "What documents are required for a mortgage application?",
      answer:
        "Typically you need passport copy, Emirates ID, salary certificate, bank statements, and proof of income.",
    },
  ];

  return (
    <>
      <section className="faq-sectionss">
        <div className="container">
          {/* Heading */}
          <div className="faq-header">
            <h2>Frequently Asked Questions</h2>

            <p>
              Everything you need to know before applying for a{" "}
              <span>mortgage</span> in Dubai.
            </p>
          </div>

          {/* Accordion */}
          <Accordion defaultActiveKey="1" className="faq-accordion">
            {faqs.map((faq, index) => (
              <Accordion.Item
                eventKey={String(index)}
                key={index}
                className="faq-item"
              >
                <Accordion.Header>{faq.question}</Accordion.Header>

                <Accordion.Body>
                  <div className="answer-box">{faq.answer}</div>
                </Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Internal CSS */}
      <style jsx>{`
        .faq-sectionss {
          width: 100%;
          background: #fff;
          padding: 30px 0;
          padding-bottom: 40px;
        }

        .faq-header {
          margin-bottom: 32px;
        }

        .faq-header h2 {
          font-size: 36px;
          font-weight: 700;
          color: #000;
          margin-bottom: 14px;
        }

        .faq-header p {
          font-size: 20px;
          color: #000;
          margin: 0;
        }

        .faq-header span {
          color: #68b95d;
          font-weight: 500;
        }

        .faq-accordion {
          display: flex;
          flex-direction: column;
          gap: 18px;
        }

        .faq-item {
          border: none !important;
          border-radius: 8px !important;
          overflow: hidden;
          background: #ececec !important;
        }

        /* Header */
        :global(.accordion-button) {
          background: #f5f5f5 !important;
          border: none !important;
          box-shadow: none !important;
          padding: 16px 22px !important;
          font-size: 22px !important;
          font-weight: 600 !important;
          color: #111 !important;
          line-height: 1.4;
        }

        :global(.accordion-button:not(.collapsed)) {
          background: #f5f5f5 !important;
          color: #111 !important;
          box-shadow: none !important;
        }

        :global(.accordion-button:focus) {
          box-shadow: none !important;
        }

        /* Remove bootstrap icon */
        :global(.accordion-button::after) {
          display: none !important;
        }

        /* Custom icon */
        :global(.accordion-button) {
          position: relative;
        }

        :global(.accordion-button::before) {
          content: "⌄";
          position: absolute;
          right: 24px;
          top: 50%;
          transform: translateY(-50%);
          font-size: 34px;
          color: #111;
          transition: 0.3s ease;
        }

        :global(.accordion-button:not(.collapsed)::before) {
          transform: translateY(-50%) rotate(180deg);
        }

        /* Body */
        :global(.accordion-body) {
          background: #f5f5f5 !important;
          padding: 0 16px 16px 16px !important;
        }

        .answer-box {
          background: #fff;
          border-radius: 6px;
          padding: 22px 18px;
          font-size: 17px;
          line-height: 1.7;
          color: #222;
        }

        /* Mobile */
        @media (max-width: 768px) {
          .faq-sections {
            padding: 50px 0;
          }

          .faq-header h2 {
            font-size: 34px;
          }

          .faq-header p {
            font-size: 16px;
          }

          :global(.accordion-button) {
            font-size: 18px !important;
            padding: 18px 18px !important;
          }

          :global(.accordion-button::before) {
            font-size: 24px;
            right: 18px;
          }

          .answer-box {
            font-size: 15px;
            padding: 18px 15px;
          }
        }
      `}</style>
    </>
  );
}
