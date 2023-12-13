import React from "react";
import styled from "styled-components";

const Header = () => {
  return (
    <StHeader>
      <div>My Todo List</div>
    </StHeader>
  );
};

export default Header;

const StHeader = styled.div`
  background-color: skyblue;
`;
