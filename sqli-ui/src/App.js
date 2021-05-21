import React from "react";
import { Form, Input, Button, Checkbox, Card, notification } from "antd";
import axios from "axios";
import { REQUEST_URL, layout, tailLayout } from "./lib/constants";
import "./App.css";

function App() {
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
    if(result!=null){
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

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <header className="App-header">
      <Card title="Login" style={{ width: 300 }}>
        <Form
          {...layout}
          name="basic"
          initialValues={{
            remember: true,
          }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Form.Item
            label="Username"
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your username!",
              },
            ]}
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

          <Form.Item {...tailLayout} name="remember" valuePropName="checked">
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item {...tailLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </header>
  );
}

export default App;
