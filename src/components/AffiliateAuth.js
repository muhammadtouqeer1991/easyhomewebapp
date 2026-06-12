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

import { useRouter } from "next/navigation";

const AffiliateAuth = () => {
  const [activeTab, setActiveTab] = useState("register");
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [formData, setFormData] = useState({
    full_name: "",
    phone: "",
    email: "",
    password: "",
    confirm_password: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirm_password) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch(
        "https://easyhomeapi.pakrealestatecrm.com/api/register.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        },
      );

      const result = await response.json();

      if (result.status) {
        // console.log("RESULT:", result);
        document.cookie = `token=${result.token}; path=/;`;
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result));

        window.dispatchEvent(new Event("authChange"));

        router.push("/affiliate/dashboard");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch(
        "https://easyhomeapi.pakrealestatecrm.com/api/login.php",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(form),
        },
      );

      const result = await res.json();

      if (result.status) {
        document.cookie = `token=${result.token}; path=/;`;
        localStorage.setItem("token", result.token);
        localStorage.setItem("user", JSON.stringify(result.user));

        window.dispatchEvent(new Event("authChange"));

        router.push("/affiliate/dashboard");
      } else {
        alert(result.message);
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    }

    setLoading(false);
  };

  return (
    <div style={styles.page}>
      <div style={styles.container}>
        <div style={styles.authPanel}>
          <div style={styles.header}>
            <h2 style={styles.title}>Affiliate Partner Portal</h2>
            <p style={styles.subtitle}>Earn commissions by referring clients</p>
          </div>

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
                <Form onSubmit={handleLogin}>
                  {/* EMAIL */}
                  <div style={styles.inputGroup}>
                    <FaEnvelope />
                    <input
                      type="email"
                      placeholder="Email Address"
                      style={styles.input}
                      value={form.email}
                      onChange={(e) =>
                        setForm({ ...form, email: e.target.value })
                      }
                      required
                    />
                  </div>

                  {/* PASSWORD */}
                  <div style={styles.inputGroup}>
                    <FaLock />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      style={styles.input}
                      value={form.password}
                      onChange={(e) =>
                        setForm({ ...form, password: e.target.value })
                      }
                      required
                    />

                    <span onClick={() => setShowPass(!showPass)}>
                      {showPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <Button type="submit" style={styles.btn} disabled={loading}>
                    {loading ? "Logging in..." : "Login"}
                  </Button>
                </Form>
              </>
            ) : (
              <>
                <Form onSubmit={handleSubmit}>
                  <div style={styles.inputGroup}>
                    <FaUser />
                    <input
                      placeholder="Full Name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaPhone />
                    <input
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaEnvelope />
                    <input
                      placeholder="Email Address"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      style={styles.input}
                      required
                    />
                  </div>

                  <div style={styles.inputGroup}>
                    <FaLock />
                    <input
                      type={showPass ? "text" : "password"}
                      placeholder="Password"
                      style={styles.input}
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      required
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
                      name="confirm_password"
                      value={formData.confirm_password}
                      onChange={handleChange}
                    />
                    <span onClick={() => setShowConfirmPass(!showConfirmPass)}>
                      {showConfirmPass ? <FaEyeSlash /> : <FaEye />}
                    </span>
                  </div>

                  <Button type="submit" style={styles.btn}>
                    Create Account
                  </Button>
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
    background: "#074dab",
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
    background: "#074dab",
    border: "none",
    fontWeight: "600",
  },

  /* RIGHT SIDE */
  infoPanel: {
    flex: 1,
    background: "linear-gradient(135deg, #5fb43d, #074dab)",
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
