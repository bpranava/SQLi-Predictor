import { Layout, Menu, Breadcrumb } from 'antd';
import { Card, Col, Row } from 'antd';

import "./App.css";

const { Header, Content, Footer } = Layout;

function Welcome() {
    return(
  <Layout>
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%'},{backgroundColor:'#F8F9E5'}}>
        <h1>ABOUT US</h1>
      {/* <div className="logo" /> */}
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">Project Description</Menu.Item>
        <Menu.Item key="2">About Us</Menu.Item> */}
        {/* <Menu.Item key="3"></Menu.Item> */}
      {/* </Menu> */}
    </Header>
    <Content className="site-layout" style={{ padding: '0 50px', marginTop: 64 }}>
      <div className="site-layout-background" style={{ padding: 40, minHeight: 500 }}>

        {/* about us content section */}
            <div >
                <Row gutter={16}>
                <Col span={8}>
                    <Card title="PRANAVA B" bordered={false}>
                    <p>Name: Pranava B</p>
                    <p>Profile: Student</p>
                    <p>Department: ISE</p>
                    <p>Email: pranavab.is17@rvce.edu.in</p>
                    
                    </Card>
                </Col>
                <Col span={8}>
                    <Card title="SUDARSHAN" bordered={false}>
                    <p>Name: Sudarshan</p>
                    <p>Profile: Student</p>
                    <p>Department: ISE</p>
                    <p>Email: sudarshan.is17@rvce.edu.in</p>
                    </Card>
                </Col>
                </Row>
            </div>

      </div>
    </Content>
    {/* <Footer style={{ textAlign: 'center' }}>Dept. of ISE, RV College of Engineering</Footer> */}
  </Layout>
    );
}

// ReactDOM.render(<Welcome/>, document.getElementById('welcome_id'));

export default Welcome;