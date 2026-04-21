"use client";
import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import {
  FaUser,
  FaEnvelope,
  FaLock,
  FaPhone,
  FaEye,
  FaEyeSlash,
} from "react-icons/fa";

const AffiliateAuth = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        {/* ================= LEFT AUTH PANEL ================= */}
        <div style={styles.authPanel}>
          {/* Header */}
          <div style={styles.header}>
            <h2 style={styles.title}>Affiliate Partner Portal</h2>
            <p style={styles.subtitle}>Earn commissions by referring clients</p>
          </div>

          {/* Tabs */}
          <div style={styles.tabs}>
            <div
              style={{
                ...styles.tab,
                ...(activeTab === "login" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("login")}
            >
              Login
            </div>

            <div
              style={{
                ...styles.tab,
                ...(activeTab === "register" ? styles.activeTab : {}),
              }}
              onClick={() => setActiveTab("register")}
            >
              Register
            </div>
          </div>

          {/* FORM */}
          <div style={styles.formBox}>
            {activeTab === "login" ? (
              <>
                <Form>
                  <div style={styles.inputGroup}>
                    <FaEnvelope />
                    <input placeholder="Email Address" style={styles.input} />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaLock />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      style={styles.input}
                    />
                    <span onClick={() => setShowPass(!showPass)}>
                      {showPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <Button style={styles.btn}>Login</Button>
                </Form>
              </>
            ) : (
              <>
                <Form>
                  <div style={styles.inputGroup}>
                    <FaUser />
                    <input placeholder="Full Name" style={styles.input} />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaPhone />
                    <input placeholder="Phone Number" style={styles.input} />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaEnvelope />
                    <input placeholder="Email Address" style={styles.input} />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaLock />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      style={styles.input}
                    />
                    <span onClick={() => setShowPass(!showPass)}>
                      {showPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <div style={styles.inputGroup}>
                    <FaLock />
                    <input
                      type={showConfirmPass ? "text" : "password"}
                      placeholder="Confirm Password"
                      style={styles.input}
                    />
                    <span onClick={() => setShowConfirmPass(!showConfirmPass)}>
                      {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <Button style={styles.btn}>Create Account</Button>
                </Form>
              </>
            )}
          </div>
        </div>

        {/* ================= RIGHT MARKETING PANEL ================= */}
        <div style={styles.infoPanel}>
          <div style={styles.infoContent}>
            <h1>Grow Your Income</h1>
            <p>
              Join our affiliate program and earn recurring commissions by
              referring clients. Track performance, withdrawals, and earnings in
              real time.
            </p>

            <ul style={styles.list}>
              <li>✔ High commission rates</li>
              <li>✔ Real-time tracking dashboard</li>
              <li>✔ Instant payouts</li>
              <li>✔ Dedicated support team</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AffiliateAuth;

/* =======================
   MODERN SAAS STYLE CSS
======================= */

const styles = {
  page: {
    // minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // background: "#f3f6fb",
    padding: "60px 15px",
  },

  container: {
    width: "100%",
    maxWidth: "1100px",
    display: "flex",
    borderRadius: "18px",
    overflow: "hidden",
    boxShadow: "0 25px 70px rgba(0,0,0,0.12)",
    background: "#fff",
  },

  /* LEFT SIDE */
  authPanel: {
    flex: 1,
    padding: "40px",
    background: "#ffffff",
  },

  header: {
    marginBottom: "25px",
  },

  title: {
    margin: 0,
    fontSize: "26px",
    fontWeight: "700",
  },

  subtitle: {
    marginTop: "6px",
    color: "#777",
    fontSize: "14px",
  },

  tabs: {
    display: "flex",
    background: "#f1f3f6",
    borderRadius: "10px",
    overflow: "hidden",
    marginBottom: "25px",
  },

  tab: {
    flex: 1,
    textAlign: "center",
    padding: "10px",
    cursor: "pointer",
    fontWeight: "600",
    color: "#555",
  },

  activeTab: {
    background: "#1855a5",
    color: "#fff",
  },

  formBox: {
    marginTop: "10px",
  },

  inputGroup: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    border: "1px solid #e5e5e5",
    borderRadius: "10px",
    padding: "12px",
    marginBottom: "15px",
    background: "#fff",
  },

  input: {
    border: "none",
    outline: "none",
    flex: 1,
    fontSize: "14px",
  },

  btn: {
    width: "100%",
    padding: "12px",
    borderRadius: "10px",
    background: "#1855a5",
    border: "none",
    fontWeight: "600",
  },

  /* RIGHT SIDE */
  infoPanel: {
    flex: 1,
    background: "linear-gradient(135deg, #5fb43d, #628fca)",
    color: "#fff",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "40px",
  },

  infoContent: {
    maxWidth: "400px",
  },

  list: {
    listStyle: "none",
    padding: 0,
    marginTop: "20px",
    lineHeight: "2",
    fontSize: "14px",
  },

  image: {
    width: "100%",
    marginTop: "25px",
  },
};
