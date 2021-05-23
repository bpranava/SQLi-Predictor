import React from "react";
import { Form, Input, Button, Checkbox, notification } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import axios from "axios";
import { REQUEST_URL } from "./lib/constants";
import { useHistory } from "react-router-dom";

function LoginForm() {
  const history = useHistory();

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
        history.push('/welcome')
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
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/" style={{ float: "right" }}>
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button
          type="primary"
          htmlType="submit"
          className="login-form-button"
          style={{ width: "100%" }}
        >
          Log in
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;
