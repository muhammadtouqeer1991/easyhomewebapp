"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Container } from "react-bootstrap";

export default function AffiliateDashboard() {
  const router = useRouter();

  // ✅ ALL HOOKS TOP LEVEL (IMPORTANT)
  const [user, setUser] = useState(null);
  const [clients, setClients] = useState([]);
  const [loadingClients, setLoadingClients] = useState(false);

  // =========================
  // 1. AUTH CHECK + USER LOAD
  // =========================
  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      router.push("/affiliate");
      return;
    }

    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, [router]);

  // =========================
  // 2. FETCH CLIENTS FUNCTION
  // =========================
  const fetchClients = async (affiliateId) => {
    if (!affiliateId) return;

    try {
      setLoadingClients(true);

      const res = await fetch(
        `https://api.easyhomemortgage.ae/api/get-clients.php?affiliate_id=${affiliateId}`,
      );

      const data = await res.json();

      if (data.status) {
        setClients(data.data);
      }
    } catch (err) {
      console.log("Client fetch error:", err);
    }

    setLoadingClients(false);
  };

  // =========================
  // 3. LOAD CLIENTS AFTER USER
  // =========================
  useEffect(() => {
    if (user?.affiliate_id) {
      fetchClients(user.affiliate_id);
    }
  }, [user]);

  // =========================
  // LOADING STATE
  // =========================
  if (!user) {
    return <div style={styles.loading}>Loading dashboard...</div>;
  }

  return (
    <div className="affiliateDash py-5">
      <Container>
        <h1 style={styles.title}>Affiliate Dashboard</h1>

        {/* BUTTONS */}
        <div style={{ marginBottom: 20 }}>
          <button
            style={{ ...styles.btn, background: "green", marginRight: 10 }}
            onClick={() => router.push("/affiliate/add-client")}
          >
            + Add New Client
          </button>

          <button
            style={styles.btn}
            onClick={() => {
              localStorage.clear();
              window.dispatchEvent(new Event("authChange"));
              document.cookie =
                "token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 UTC;";

              router.push("/affiliate");
            }}
          >
            Logout
          </button>
        </div>

        <div style={styles.card}>
          <h3>Welcome, {user.full_name}</h3>
          <p>
            <b>Affiliate ID:</b> {user.affiliate_id}
          </p>
          <p>
            <b>Referral Code:</b> {user.referral_code}
          </p>
        </div>

        <div style={styles.grid}>
          <div style={styles.box}>
            <h2>{clients.length}</h2>
            <p>Total Clients</p>
          </div>

          <div style={styles.box}>
            <h2>0</h2>
            <p>Active Referrals</p>
          </div>

          <div style={styles.box}>
            <h2>$0</h2>
            <p>Total Earnings</p>
          </div>
        </div>

        <div style={styles.card}>
          <h3>Your Referral Link</h3>
          <input
            style={styles.input}
            readOnly
            value={`https://easyhomemortgage.ae/register?ref=${user?.referral_code}`}
          />
        </div>

        <div style={styles.card}>
          <h3>My Clients</h3>

          {loadingClients ? (
            <p>Loading clients...</p>
          ) : (
            <table width="100%" border="1" cellPadding="10">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Phone</th>
                  <th>Email</th>
                  <th>Service</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {clients.length > 0 ? (
                  clients.map((c, i) => (
                    <tr key={i}>
                      <td>{c.client_name}</td>
                      <td>{c.phone}</td>
                      <td>{c.email}</td>
                      <td>{c.service_type}</td>
                      <td>{c.status}</td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan="5" style={{ textAlign: "center" }}>
                      No clients found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          )}
        </div>
      </Container>
    </div>
  );
}

const styles = {
  container: {
    padding: "30px",
    fontFamily: "Arial",
    background: "#f5f6fa",
    minHeight: "100vh",
  },
  title: {
    marginBottom: "20px",
  },
  card: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    marginBottom: "20px",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(3, 1fr)",
    gap: "15px",
    marginBottom: "20px",
  },
  box: {
    background: "#fff",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    borderRadius: "6px",
    border: "1px solid #ddd",
  },
  actions: {
    marginTop: "20px",
  },
  btn: {
    padding: "10px 20px",
    background: "red",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    cursor: "pointer",
  },
  loading: {
    padding: "50px",
    textAlign: "center",
  },
};
