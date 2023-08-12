import { SignInMethod } from "firebase/auth";
import SignUp from "../authentication/Signup";
import Login from "../authentication/Login";
import PrivateRoute from "../authentication/PrivateRoute";
import Dashboard from "./dashboards/Dashboard";
import { AuthProvider } from "../contexts/AuthContext";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ForgotPassword from "./ForgotPassword";
import UpdateProfile from "./UpdateProfile";
import HomePage from "./HomePage";
import CreateEntry from "./CreateEntry";
import PastDiaries from "./PastEntries";

function App() {
  return (
    <div className="app">
      <Router>
        <AuthProvider>
          <Routes>
            <Route
              path="/dashboard"
              element={
                <PrivateRoute>
                  <Dashboard />
                </PrivateRoute>
              }
            ></Route>
            <Route
              path="/update-profile"
              element={
                <PrivateRoute>
                  <UpdateProfile />
                </PrivateRoute>
              }
            ></Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<Login />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/create-entry" element={<CreateEntry />} />
            <Route path="/past-diaries" element={<PastDiaries />} />
          </Routes>
        </AuthProvider>
      </Router>
    </div>
  );
}

export default App;
