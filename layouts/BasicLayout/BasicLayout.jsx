import React from "react";
import Header from "../../components/Header";
import { Container } from "semantic-ui-react";
import PageFooter from "../../components/PageFooter";
import MenuNavigation from "../../components/Header/MenuNavigation";

export default function BasicLayout(props) {
  const { children } = props;

  return (
    <div className="pagewrapper">
      <Header />

      <Container fluid className="content">
        {<MenuNavigation />}
      </Container>
      <Container fluid className="footer">
        <PageFooter />
      </Container>
    </div>
  );
}
