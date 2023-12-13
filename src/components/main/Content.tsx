import React, { useState } from "react";
import { v4 as uuidv4, v4 } from "uuid";

type Todo = {
  id: string;
  title: string;
  content: string;
  isDone: boolean;
};

const Content = () => {
  const [todo, setTodo] = useState<Todo>({
    id: v4(),
    title: "타입스크립트",
    content: "투두리스트 만들기",
    isDone: false,
  });
  return (
    <div>
      <div>Working</div>
      <ul>
        <li>{todo.title}</li>
        <li>{todo.content}</li>
        <button>삭제하기</button>
        <button>완료</button>
      </ul>
      <div>Done</div>
    </div>
  );
};

export default Content;
