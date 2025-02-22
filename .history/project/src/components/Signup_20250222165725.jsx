import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = useState({ name: "", email: "", password: "" });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(""); // State for success/error message
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await fetch("http://localhost:4000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(user),
      });

      const json = await response.json();
      setLoading(false);

      if (response.ok) {
        localStorage.setItem("token", json.authtoken);
        setMessage("Signup successful! Redirecting...");
        setTimeout(() => navigate("/"), 1000);
      } else {
        setMessage(json.error || "Signup failed. Please try again.");
      }
    } catch (err) {
      setLoading(false);
      setMessage("An error occurred. Please try again later.");
      console.error("Signup error:", err);
    }
  };

  return (
    <div className="container my-3">
      {message && (
        <div
          className={`alert ${
            message.includes("successful") ? "alert-success" : "alert-danger"
          }`}
        >
          {message}
        </div>
      )}
      <h2>Signup</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={user.name}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            required
            minLength={5}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
            required
            minLength={8}
          />
        </div>
        <button type="submit" className="btn btn-primary" disabled={loading}>
          {loading ? "Signing up..." : "Submit"}
        </button>
      </form>
    </div>
  );
};

export default Signup;
