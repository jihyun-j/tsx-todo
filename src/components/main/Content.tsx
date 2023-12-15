import React, { useState } from "react";
import styled from "styled-components";
import { Todo } from "./Form";

type Props = {
  todos: Todo;
  onClickDeleteTodo: (id: string) => void;
  onClickDoneTodo: (id: string) => void;
};

const Content = ({ todos, onClickDeleteTodo, onClickDoneTodo }: Props) => {
  return (
    <StContainer>
      <p>{todos.title}</p>
      <p>{todos.content}</p>
      <button onClick={() => onClickDoneTodo(todos.id)}>
        {todos.isDone ? "취소" : "완료"}
      </button>
      <button onClick={() => onClickDeleteTodo(todos.id)}>삭제</button>
    </StContainer>
  );
};

export default Content;

const StContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  border: 1px solid #212121;
  border-radius: 10px;
  padding: 8px 16px;
`;
