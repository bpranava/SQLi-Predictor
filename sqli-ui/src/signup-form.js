import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { REQUEST_URL } from "./lib/constants";

function SignupForm() {

  const onFinish = async (values) => {
    const result = await axios
      .post(REQUEST_URL.PREDICT, values)
      .then(function (response) {
        return response.data;
      })
      .catch((errorInfo) => {
        console.log("Error while predicting SQL Injection");
        return null;
      });
    console.log(result);
    if (result != null) {
      if (result?.sqli) {
        notification["error"]({
          message: `SQL Injection Threat detected in ${result?.field} field`,
          key: "1",
          description: "SQLi Detector",
          duration: 3,
        });
      } else {
        notification["success"]({
          message: `No SQL Injection Threat detected`,
          key: "2",
          description: "SQLi Detector",
          duration: 3,
        });
      }
    }
  };

  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
      style={{ paddingTop: "1rem" }}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: "Please input your Username!" }]}
      >
        <Input
          prefix={<UserOutlined className="site-form-item-icon" />}
          placeholder="Username"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: "Please input your Password!" }]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="confirm"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Please confirm your password!',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('The two passwords that you entered do not match!'));
            },
          }),
        ]}
      >
        <Input.Password
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Confirm Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%" }}
        >
          Sign Up
        </Button>
      </Form.Item>
    </Form>
  );
}

export default SignupForm;
