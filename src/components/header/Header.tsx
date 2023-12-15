import React from "react";
import styled from "styled-components";

const Header = () => {
  return <StHeader>My Todo List</StHeader>;
};

export default Header;

const StHeader = styled.div`
  font-size: 28px;
  font-weight: 600;
  text-align: center;
`;
