import React from "react";
import { Container, Image } from "semantic-ui-react";
import Link from "next/link";
import { Row, Col, Input } from "antd";
const { Search } = Input;
export default function TopBar() {
  return (
    <div className="top-bar">
      <Row className="top-bar__row">
        <Col span={12} className="top-bar__left">
          <Logo />
        </Col>
        <Col span={12} className="top-bar__right">
          <SearchInput />
        </Col>
      </Row>
    </div>
  );
}

const Logo = () => {
  return (
    <Link href="/">
      <a>
        <Image src="/logo.png" alt="logo"></Image> {/*CAMBIAR LOGO  */}
      </a>
    </Link>
  );
};

const SearchInput = () => {
  const onSearch = (value) => console.log(value);
  return (
    <Search
      placeholder="input search text"
      allowClear
      onSearch={onSearch}
      style={{ width: 200 }}
    />
  );
};
