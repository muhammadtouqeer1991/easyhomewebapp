"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Container, Dropdown, Nav, Navbar, NavDropdown } from "react-bootstrap";
import { usePathname, useRouter } from "next/navigation";

const Menu = () => {
  const pathname = usePathname();
  const router = useRouter();

  const [sticky, setSticky] = useState(false);
  const [user, setUser] = useState(null);

  const isActive = (path) => pathname === path;

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const loadUser = () => {
    const token = localStorage.getItem("token");
    const storedUser = localStorage.getItem("user");

    if (token && storedUser) {
      setUser(JSON.parse(storedUser));
    } else {
      setUser(null);
    }
  };

  useEffect(() => {
    loadUser();
    const handleAuthChange = () => {
      loadUser();
    };
    window.addEventListener("authChange", handleAuthChange);
    return () => {
      window.removeEventListener("authChange", handleAuthChange);
    };
  }, []);

  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    setUser(null);
    window.dispatchEvent(new Event("authChange"));
    router.push("/affiliate");
  };

  return (
    <div className="Menu py-lg-2 py-md-2 py-sm-2 py-2">
      <Navbar
        expand="lg"
        className={`transition-navbar ${sticky ? "sticky-nav" : ""}`}
      >
        <Container>
          <Link className="nav-brand" href="/">
            <Image
              src="/brandLogo.svg"
              alt="Logo"
              width={230}
              height={60}
              priority
            />
          </Link>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-lg-2 gap-md-2 gap-sm-2 gap-2 align-items-center">
              {/* Home */}
              <Link
                className={`nav-link ${isActive("/") ? "active-link" : ""}`}
                href="/"
              >
                Home
              </Link>

              {/* Services Dropdown */}
              <NavDropdown title="Our Services" id="basic-nav-dropdown">
                <Link
                  className={`dropdown-item ${isActive("/residential-mortgages") ? "active-link" : ""}`}
                  href="/residential-mortgages"
                >
                  Residential Mortgages
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/non-resident-mortgage") ? "active-link" : ""}`}
                  href="/non-resident-mortgage"
                >
                  Non-Resident Mortgage
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/self-employed-mortgages") ? "active-link" : ""}`}
                  href="/self-employed-mortgages"
                >
                  Self-Employed Mortgages
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/developer-based-transaction") ? "active-link" : ""}`}
                  href="/developer-based-transaction"
                >
                  Developer Based Transaction
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/handover-payment") ? "active-link" : ""}`}
                  href="/handover-payment"
                >
                  Handover Payment
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/buyout-transaction") ? "active-link" : ""}`}
                  href="/buyout-transaction"
                >
                  Buyout Transaction
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/equity-release") ? "active-link" : ""}`}
                  href="/equity-release"
                >
                  Equity Release
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/seller-buyout") ? "active-link" : ""}`}
                  href="/seller-buyout"
                >
                  Seller Buyout
                </Link>

                <Link
                  className={`dropdown-item ${isActive("/services") ? "active-link" : ""}`}
                  href="/services"
                >
                  Services
                </Link>
              </NavDropdown>

              <Link
                className={`nav-link ${isActive("/mortgage-calculator") ? "active-link" : ""}`}
                href="/#calculator"
              >
                Mortgage Calculator
              </Link>

              <Link
                className={`nav-link ${isActive("/about-us") ? "active-link" : ""}`}
                href="/about-us"
              >
                About Us
              </Link>

              <Link
                className={`nav-link ${isActive("/contact-us") ? "active-link" : ""}`}
                href="/contact-us"
              >
                Contact Us
              </Link>
            </Nav>

            <Nav className="ms-auto">
              {user ? (
                // ✅ LOGGED IN DROPDOWN
                <Dropdown align="end">
                  <Dropdown.Toggle
                    variant="success"
                    className="px-3 text-white"
                  >
                    {user.full_name}
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item
                      onClick={() => router.push("/affiliate/dashboard")}
                    >
                      Dashboard
                    </Dropdown.Item>

                    <Dropdown.Item
                      onClick={() => router.push("/affiliate/add-client")}
                    >
                      Add Client
                    </Dropdown.Item>

                    <Dropdown.Divider />

                    <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              ) : (
                // ❌ NOT LOGGED IN
                <Link
                  className="nav-link secondarybg px-4 text-white rounded"
                  href="/affiliate"
                >
                  Broker Affiliate
                </Link>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Menu;
