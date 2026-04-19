"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Menu = () => {
  return (
    <>
      <div className="Menu py-lg-2 py-md-2 py-sm-2 py-2">
        <Navbar expand="lg">
          <Container>
            <Link className="nav-brand" href="/">
              <Image
                src="brandLogo.svg"
                alt="Logo"
                width={120}
                height={70}
                priority
              />
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="ms-auto gap-lg-2 gap-md-2 gap-sm-2 gap-2 align-items-center">
                <Link className="nav-link active" href="/">
                  Home
                </Link>
                <NavDropdown title="What We Offer" id="basic-nav-dropdown">
                  <Link className="dropdown-item" href="/residential-mortgages">
                    Residential Mortgages
                  </Link>
                  <Link className="dropdown-item" href="/non-resident-mortgage">
                    Non-Resident Mortgage
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/self-employed-mortgages"
                  >
                    Self-Employed Mortgages
                  </Link>
                  <Link
                    className="dropdown-item"
                    href="/developer-based-transaction"
                  >
                    Developer Based Transaction
                  </Link>
                  <Link className="dropdown-item" href="/handover-payment">
                    Handover Payment
                  </Link>
                  <Link className="dropdown-item" href="/oqood-resale">
                    Oqood Resale
                  </Link>
                  <Link className="dropdown-item" href="/first-time-buyers">
                    First-Time Buyer
                  </Link>
                </NavDropdown>
                <Link className="nav-link" href="/non-resident-mortgage">
                  Non-Resident Mortgage
                </Link>
                <Link className="nav-link" href="#link">
                  Golden Visa
                </Link>
                <NavDropdown title="Projects" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#">
                    Residential Mortgages
                  </NavDropdown.Item>
                </NavDropdown>
                <Link className="nav-link" href="#link">
                  Property Investment
                </Link>
              </Nav>
              <Nav className="ms-auto">
                <Link
                  className="nav-link secondarybg px-lg-4 px-md-4 px-sm-4 px-3 text-white rounded"
                  href="#link"
                >
                  Broker Affiliate
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
};

export default Menu;
