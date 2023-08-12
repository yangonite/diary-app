import { useState } from "react";
import React from "react";
import { useAuth } from "../../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Card, Alert, Button } from "antd";
import { clear } from "@testing-library/user-event/dist/clear";

export default function Dashboard() {
  const [error, setError] = useState("");
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

  return (
    <div>
      <Card title="Vertical Aligned Card" className="vertical-card">
        <p>Your card content goes here.</p>
      </Card>
      <Card title="Vertical Aligned Card" className="vertical-card">
        <p>Your card content goes here.</p>
      </Card>
      <Card title="Vertical Aligned Card" className="vertical-card">
        <p>Your card content goes here.</p>
      </Card>
      <Card title="Vertical Aligned Card" className="vertical-card">
        <p>Your card content goes here.</p>
      </Card>
      <Card title="Vertical Aligned Card" className="vertical-card">
        <p>Your card content goes here.</p>
      </Card>

      <Link to="/create-entry">
        <Button> Create Diary</Button>
      </Link>

      <Link to="/past-diaries">
        <Button> View Diaries</Button>
      </Link>
      <Button onClick={logout}>Logout</Button>
    </div>
  );
}
