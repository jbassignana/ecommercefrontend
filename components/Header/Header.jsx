import TopBar from "./TopBar";
import { Row, Col } from "antd";
import MenuNavigation from "./MenuNavigation/";
export default function Header() {
  return (
    <div className="header">
      {/* if there aren't more elements than topbar row and col tags should be removed */}
      <Row>
        <Col span={24}>
          <TopBar />
        </Col>
      </Row>
    </div>
  );
}
