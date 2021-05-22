import React from "react";
import { Card, Tabs } from "antd";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import "./App.css";

const { TabPane } = Tabs;

function App() {
  function callback(key) {
    console.log(key);
  }

  return (
    <header className="App-header">
      <Card
        title="Sign Up"
        style={{ width: "20rem", height: "31rem" }}
        headStyle={{
          backgroundColor: "lightgray",
          display: "flex",
          justifyContent: "center",
          minHeight: "6rem",
          fontSize: "1.5rem",
        }}
      >
        <Tabs size="default" defaultActiveKey="1" onChange={callback}>
          <TabPane tab="Login" key="1">
            <LoginForm />
          </TabPane>
          <TabPane tab="Sign Up" key="2">
            <SignupForm />
          </TabPane>
        </Tabs>
      </Card>
    </header>
  );
}

export default App;
