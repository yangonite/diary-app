import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Button, Form, Input, Card, Alert, message } from "antd";
import { HomeTwoTone } from "@ant-design/icons";
import HomePage from "../components/HomePage";

export default function Signup() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { signup } = useAuth();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [messageApi, contextHolder] = message.useMessage();

  const onFinish = async (values) => {
    let email = values.email;
    let password = values.password;
    console.log("Received values of form: ", values);
    signup(email, password)
      .then((user) => {
        console.log("singup then user", user);
        messageApi.success("Account created!");
        setTimeout(() => {
          navigate("/dashboard");
        }, 1000);
      })
      .catch((err) => {
        setError("Failed to create an account. Email already in use.");
      });
  };

  const onFinishFailed = (errorInfo) => {
    setError("Error: Please check your form inputs.");
  };

  return (
    <div>
      <Card className="auth-card">
        {contextHolder}
        {error && (
          <Alert
            message={error}
            type="error"
            closable
            onClose={() => setError(null)}
            className="text-center"
          />
        )}

        <br />
        <Form
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
          layout="vertical"
        >
          <h2 className="text-center">Sign Up</h2>
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
              className="w-100"
            >
              <Input.Password />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
                  required: true,
                  message: "Please confirm your password!",
                },
                ({ getFieldValue }) => ({
                  validator(_, value) {
                    if (!value || getFieldValue("password") === value) {
                      return Promise.resolve();
                    }
                    return Promise.reject(
                      new Error(
                        "The new password that you entered does not match!"
                      )
                    );
                  },
                }),
              ]}
              className="w-100"
            >
              <Input.Password />
            </Form.Item>
          </div>

          <Form.Item>
            <Button type="primary" htmlType="submit" className="w-100">
              Sign Up
            </Button>
          </Form.Item>
          <div className="text-center">
            Already have an account? <Link to="/login"> Log In</Link>
          </div>
          <br />

          <br />
        </Form>
      </Card>
    </div>
  );
}
