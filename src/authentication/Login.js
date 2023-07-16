import React, { useRef, useState } from "react";
// import { Card, Alert } from "react-bootstrap";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { HomeTwoTone } from "@ant-design/icons";
import { Button, Form, Input, Card, Alert } from "antd";

export default function Login() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const { login, currentUser } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const onFinish = (values) => {
    let email = values.email;
    let password = values.password;
    console.log("Received values of form: ", values);

    console.log("login fnc", login);
    console.log("email, password", email, password);

    // this login is the same as "signInWithEmailAndPassword"
    login(email, password)
      .then((user) => {
        setError("");

        console.log("logged in");
        console.log("user in login", user);

        navigate("/dashboard");
      })
      .catch((err) => {
        // only executed if there is any errors
        console.error(err);
        setError("Incorrect email or password!");
      });
  };

  const onFinishFailed = (errorInfo) => {
    setError("Error: Please check your form inputs.");
  };
  return (
    <div>
      <Card className="auth-card">
        {`This is the current user: ${currentUser}`}
        {error && (
          <Alert
            className="mb-2"
            message={error}
            type="error"
            closable
            onClose={() => setError(null)}
          />
        )}

        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <h2 className="text-center">Log In</h2>
          <div>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
              className="w-100"
            >
              <Input />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  required: true,
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100">
              Login
            </Button>
          </Form.Item>

          <div className="d-flex flex-column flex-wrap align-items-end text-right">
            <span>
              <Link to="/forgot-password">Forgot Password?</Link>
            </span>
            <span>
              Need an Account? <Link to="/signup">Sign Up</Link>
            </span>
          </div>
        </Form>
      </Card>
    </div>
  );
}
