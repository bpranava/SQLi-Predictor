import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Form, Input, Button, Checkbox, Card } from 'antd';
import axios from 'axios';
export default App;

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};
const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

function App() {
  const onFinish = (values) => {
    console.log('Success:', values);
    // axios.post('http://localhost:5000/predict',values);
    fetch('http://127.0.0.1:5000/predict', {
      method: 'POST',
      headers: {
        'Content-type': 'multipart/form-data',
      },
      body: JSON.stringify(values),
    })
      .then(res => res.json())
      .then(res => console.log(res));
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
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
            message: 'Please input your username!',
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
            message: 'Please input your password!',
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
};
