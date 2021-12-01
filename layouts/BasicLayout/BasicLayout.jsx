import React from "react";
import Header from "../../components/Header";
import { Container } from "semantic-ui-react";
import PageFooter from "../../components/PageFooter";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <>
      <Container fluid className="basic-layout">
        <Header />
      </Container>
      <Container fluid className="content">
        {children}
      </Container>
      <Container fluid className="footer">
        <PageFooter />
      </Container>
    </>
  );
}
