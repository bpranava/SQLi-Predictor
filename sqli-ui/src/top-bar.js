import React from "react";
import { Row, Col } from "antd";

function TopBar() {
  
  return (
    <Row>
        <Col span={24}>
            <div style={{backgroundColor:"#282a35", height:"5rem"}}></div>
        </Col>
    </Row>
  );
}

export default TopBar;
