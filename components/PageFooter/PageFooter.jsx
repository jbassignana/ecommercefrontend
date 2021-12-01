import React from "react";
import { Layout, Row, Col } from "antd";

const { Footer } = Layout;

export default function PageFooter() {
  return (
    <>
      <Layout>
        <Footer className="footer">
          <div className="simpleLine"></div>
          <Row className="mainRow">
            <Col span={6}>
              <h4>Acerca de</h4>
              <p>Terminos y condiciones</p>
              <p>Quienes somos</p>
              <p>Resumen</p>
            </Col>
            <Col span={6}>
              <h4>Ayuda</h4>
              <p>Vender</p>
              <p>Resolución de problemas</p>
              <p>Centro de seguridad</p>
            </Col>
            <Col span={6}>
              <h4>Redes sociales</h4>
              <p>Twitter</p>
              <p>Facebook</p>
              <p>YouTube</p>
            </Col>
            <Col span={6}>
              <h4>Mi cuenta</h4>
              <p>Mis Compras</p>
              <p>Favoritos</p>
              <p>Vender</p>
            </Col>
          </Row>
          <br />
          <p>Copyright © 2021 Uruguay</p>
        </Footer>
      </Layout>
    </>
  );
}
