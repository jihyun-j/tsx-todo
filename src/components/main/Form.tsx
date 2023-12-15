import React, { useState } from "react";
import styled from "styled-components";
import Content from "./Content";
import { v4 } from "uuid";

export interface Todo {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
}

const Form = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTitle = e.target.value;
    setTitle(newTitle);
  };

  const onChangeContent = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newContent = e.target.value;
    setContent(newContent);
  };

  const onClickAddTodo = (e: any) => {
    e.preventDefault();
    const newTodo = {
      id: v4(),
      title,
      content,
      isDone: false,
    };

    setTodos([...todos, newTodo]);
    setTitle("");
    setContent("");
  };

  const onClickDeleteTodo = (id: string) => {
    const deletedTodo = todos.filter((todo) => todo.id !== id);
    setTodos(deletedTodo);
  };

  const onClickDoneTodo = (id: string) => {
    const doneTodo = todos.map((todo) =>
      todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
    );

    setTodos(doneTodo);
  };

  return (
    <>
      <StForm action="">
        <div>
          <label htmlFor="">제목</label>
          <input type="text" value={title} onChange={onChangeTitle} />
        </div>

        <div>
          <label htmlFor="">내용</label>
          <input type="text" value={content} onChange={onChangeContent} />
        </div>
        <button onClick={onClickAddTodo}>추가</button>
      </StForm>

      <div>
        <h2>Working</h2>
        <StListContainer>
          {todos
            .filter((todo) => todo.isDone === false)
            .map((todo) => {
              return (
                <Content
                  key={todo.id}
                  todos={todo}
                  onClickDeleteTodo={onClickDeleteTodo}
                  onClickDoneTodo={onClickDoneTodo}></Content>
              );
            })}
        </StListContainer>

        <h2>Done</h2>
        <StListContainer>
          {todos
            .filter((todo) => todo.isDone === true)
            .map((todo) => {
              return (
                <Content
                  key={todo.id}
                  todos={todo}
                  onClickDeleteTodo={onClickDeleteTodo}
                  onClickDoneTodo={onClickDoneTodo}></Content>
              );
            })}
        </StListContainer>
      </div>
    </>
  );
};

export default Form;

const StForm = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
  margin-top: 20px;
  background-color: #ebebeb;

  & button {
    background-color: orange;
    border: none;
    padding: 8px 16px;
    border-radius: 5px;
  }
`;

const StListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 30px;
`;

/* <Content
    id={todo.id}
    title={todo.title}
    content={todo.content}
    isDone={todo.isDone}
    onClickDeleteTodo={() => onClickDeleteTodo(todo.id)}
    onClickDoneTodo={() => onClickDoneTodo(todo.id)}></Content>
         
       */
