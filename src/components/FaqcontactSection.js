// components/FaqcontactSection.jsx
"use client";

import { Accordion } from "react-bootstrap";
import { FiChevronDown } from "react-icons/fi";

export default function FaqcontactSection() {
  const faqData = [
    {
      question: "How quickly can I get mortgage pre-approval?",
      answer:
        "Mortgage pre-approval usually takes between 24 hours to a few working days depending on your documents and bank processing.",
    },
    {
      question: "Can non-residents apply for mortgages in Dubai?",
      answer:
        "Yes, many UAE banks offer mortgage solutions for non-residents subject to eligibility criteria.",
    },
    {
      question: "Is the consultation free?",
      answer:
        "Yes, the initial consultation is completely free with no hidden charges.",
    },
  ];

  return (
    <>
      <div className="faq-wrapper">
        <div className="container">
          <h2 className="faq-title">FAQ</h2>

          <Accordion defaultActiveKey={null} flush>
            {faqData.map((item, index) => (
              <Accordion.Item
                eventKey={index.toString()}
                key={index}
                className="faq-item"
              >
                <Accordion.Header>
                  <span>{item.question}</span>
                </Accordion.Header>

                <Accordion.Body>{item.answer}</Accordion.Body>
              </Accordion.Item>
            ))}
          </Accordion>
        </div>
      </div>

      {/* INTERNAL CSS */}
      <style jsx>{`
        .faq-wrapper {
          background: #fff;
          padding: 20px 0;
          padding-bottom: 60px;
        }

        .faq-title {
          font-size: 30px;
          font-weight: 700;
          margin-bottom: 35px;
          color: #111;
        }

        .faq-wrapper .faq-item {
          border: none !important;

          border-radius: 8px !important;
          padding-bottom: 20px !important;
          overflow: hidden;
          background: #f5f5f5;
        }

        :global(.accordion-button) {
          background: #f5f5f5 !important;
          box-shadow: none !important;
          padding: 24px 22px;
          font-size: 22px;
          font-weight: 600;
          color: #111 !important;
        }

        :global(.accordion-button:not(.collapsed)) {
          background: #f5f5f5 !important;
          color: #111 !important;
        }

        :global(.accordion-button::after) {
          display: none !important;
        }

        :global(.accordion-button) {
          position: relative;
        }

        :global(.accordion-button::before) {
          content: "⌄";
          position: absolute;
          right: 20px;
          font-size: 28px;
          color: #111;
          transition: 0.3s;
        }

        :global(.accordion-button:not(.collapsed)::before) {
          transform: rotate(180deg);
        }

        :global(.accordion-body) {
          padding: 0 22px 22px;
          font-size: 17px;
          line-height: 1.8;
          color: #555;
        }

        :global(.accordion-item:first-of-type .accordion-button),
        :global(.accordion-item:last-of-type .accordion-button.collapsed) {
          border-radius: 8px !important;
        }

        @media (max-width: 768px) {
          .faq-title {
            font-size: 24px;
          }

          :global(.accordion-button) {
            font-size: 17px;
            padding: 18px 18px;
          }

          :global(.accordion-body) {
            font-size: 15px;
          }
        }
      `}</style>
    </>
  );
}
