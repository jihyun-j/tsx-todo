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
      <h3>{todos.title}</h3>
      <p>{todos.content}</p>

      <StButtonContainer>
        <StDoneBtn onClick={() => onClickDoneTodo(todos.id)}>
          {todos.isDone ? "취소" : "완료"}
        </StDoneBtn>
        <StDeleteBtn onClick={() => onClickDeleteTodo(todos.id)}>
          삭제
        </StDeleteBtn>
      </StButtonContainer>
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

const StButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const StDoneBtn = styled.button`
  background-color: #9b9bff;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
`;

const StDeleteBtn = styled.button`
  background-color: #ff6666;
  border: none;
  padding: 8px 16px;
  border-radius: 5px;
`;
