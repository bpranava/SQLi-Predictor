import React from "react";
import { Card, Tabs, Menu, Divider, Layout } from "antd";
import LoginForm from "./login-form";
import SignupForm from "./signup-form";
import "./App.css";
import ListBody from "antd/lib/transfer/ListBody";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Welcome from "./welcome"

const { TabPane } = Tabs;
const { Header } = Layout;

function Demo() {
  function callback(key) {
    console.log(key);
  }

  return (
    <React.Fragment>
    <header className="App-header">
      <Card
        title="SQLi Detector"
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
     </React.Fragment>
  );
}

function App() {
  function callback(key) {
    console.log(key);
  }

  return (
    <div class="body">

     <Router>
       <Switch>
       <Route path='/' exact component = {Demo} />
       <Route path='/welcome' component={Welcome} />
      </Switch>
     </Router>

     </div>


  );
}

export default App;
