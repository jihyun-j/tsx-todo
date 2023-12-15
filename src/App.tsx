import React from "react";

import Header from "./components/header/Header";
import Form from "./components/main/Form";
import styled from "styled-components";

function App() {
  return (
    <Container>
      <Header />
      <Form />
    </Container>
  );
}

export default App;

const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 50px auto;
`;
