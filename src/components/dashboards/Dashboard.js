import { useState } from "react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Alert, Button } from "antd";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  async function handleLogOut() {
    setError("");

    try {
      await logout();
      console.log("logged out");
      navigate("/login");
    } catch (error) {
      setError("Failed to log out");
    }
  }

  return (
    <>
      <Card
        title="Profile"
        style={{
          width: 300,
        }}
      >
        <h1>{currentUser}</h1>
        <h2 className="text-center mb-4">Profile</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <strong>Email: </strong> {currentUser.email}
        <Link to="/update-profile" className="btn btn-primary w-100 mt-3">
          {" "}
          Update Profile
        </Link>
      </Card>

      <div className="w-100 text-center mt-2 ">
        <Button type="primary" onClick={logout}>
          Log Out
        </Button>
      </div>
    </>
  );
}
