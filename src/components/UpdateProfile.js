import React, { useRef, useState } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { Input, Alert, Form, Card, Button } from "antd";

export default function UpdateProfile() {
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword, updateEmail } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // function handleSubmit(e) {
  //   e.preventDefault();
  //   if (passwordRef.current.value !== passwordConfirmRef.current.value) {
  //     return setError("Passwords do not match");
  //   }

  //   const promises = [];
  //   setLoading(true);
  //   setError("");
  //   if (emailRef.current.value !== currentUser.email) {
  //     promises.push(updateEmail(emailRef.current.value));
  //   }

  //   if (passwordRef.current.value) {
  //     promises.push(updatePassword(passwordRef.current.value));
  //   }

  //   Promise.all(promises)
  //     .then(() => {
  //       navigate("/");
  //     })
  //     .catch(() => {
  //       setError("Failed to update account");
  //     })
  //     .finally(() => {
  //       setLoading(false);
  //     });
  // }

  const promises = [];
  const onFinish = (values) => {
    let email = values.email;
    let password = values.password;
    console.log("Received values of form: ", values);

    if (email != currentUser.email) {
      promises.push(updateEmail(email));
      console.log("here we are");
    }
    if (password != currentUser.password) {
      promises.push(updatePassword(password));
    }

    Promise.all(promises)
      .then(() => {
        navigate("/dashboard");
      })
      .catch((error) => {
        console.log("YO ERROR:", error);
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const onFinishFailed = (errorInfo) => {
    setError("Error: Please check your form inputs.");
  };
  return (
    <div>
      <Card
        style={{
          width: "600px",
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
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
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 16,
          }}
          style={{
            maxWidth: 600,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <h2 className="text-center"> Update Profile</h2>
          <br />
          <div style={{ marginLeft: "-80px" }}>
            <Form.Item
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
            >
              <Input style={{ width: "100%" }} />
            </Form.Item>
            <Form.Item
              label="Password"
              name="password"
              rules={[
                {
                  message: "Please input your password!",
                },
              ]}
            >
              <Input.Password
                style={{ width: "100%" }}
                placeholder="Leave blank to keep the same"
              />
            </Form.Item>
            <Form.Item
              name="confirm"
              label="Confirm Password"
              dependencies={["password"]}
              hasFeedback
              rules={[
                {
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
            >
              <Input.Password
                style={{ width: "100%" }}
                placeholder="Leave blank to keep the same"
              />
            </Form.Item>
          </div>

          <Form.Item
            wrapperCol={{
              offset: 8,
              span: 16,
            }}
          >
            <Button
              type="primary"
              htmlType="submit"
              className="w-100"
              style={{ marginLeft: "-30px" }}
            >
              Update
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
}
