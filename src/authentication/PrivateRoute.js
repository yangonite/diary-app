import React from "react";

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { Route } from "react-router-dom";

export default function PrivateRoute({ children }) {
  const { currentUser } = useAuth();

  return currentUser ? children : <Navigate to="/login" />;
}
