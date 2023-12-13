import React, { useState } from "react";
import styled from "styled-components";

const Form = () => {
  return (
    <StForm action="">
      <label htmlFor=""> 제목</label>
      <input type="text" />

      <label htmlFor="">내용</label>
      <input type="text" />

      <button>추가하기</button>
    </StForm>
  );
};

export default Form;

const StForm = styled.form`
  background-color: lightgray;
`;
