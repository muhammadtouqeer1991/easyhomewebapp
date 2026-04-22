import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { CiYoutube } from "react-icons/ci";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { SlCalender, SlLocationPin } from "react-icons/sl";

const Topbar = () => {
  return (
    <>
      <div className="Topbar primarybg p-2 py-lg-2 py-md-2 py-sm-2">
        <Container>
          <Row className="align-items-center">
            <Col lg={6} xs={6}>
              <ul className="list-unstyled m-0 d-flex flex-wrap align-items-center gap-lg-2 gap-md-2 gap-sm-2 gap-2">
                <li className="d-lg-flex d-none">
                  <Link
                    href="mailto:info@easyhomemortgage.com"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <MdEmail size={18} /> info@easyhomemortgage.com
                  </Link>
                </li>
                <li className="text-decoration-none black fs-8 d-lg-flex d-none align-items-center gap-lg-1 text-white border-start ps-lg-2 border-end pe-lg-2">
                  <SlCalender size={15} /> Mon - Fri 09:00 - 18:00
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <SlLocationPin /> Dubai, UAE
                  </Link>
                </li>
              </ul>
            </Col>
            <Col lg={6} xs={6}>
              <ul className="list-unstyled m-0 d-flex flex-wrap align-items-center gap-lg-2 gap-md-2 gap-sm-2 gap-2 justify-content-end">
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <FaFacebookF size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <FaXTwitter size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <FaLinkedinIn size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <FaInstagram size={18} />
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-decoration-none black fs-8 text-white"
                  >
                    <CiYoutube size={18} />
                  </Link>
                </li>
              </ul>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Topbar;
