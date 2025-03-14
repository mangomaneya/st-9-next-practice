import { Todos } from "@/types/data";
import Image from "next/image";
import React from "react";

type Props = {
  todo: Todos;
};

const TodoItem = ({ todo }: Props) => {
  return (
    <li
      key={todo.id}
      style={{
        border: "1px solid black",
        padding: "10px",
        marginBottom: "10px",
      }}
    >
      <h3>{todo.title}</h3>
      <Image
        src={`${todo.imgPath}?random=${Math.random()}`}
        alt="투두 이미지"
        width={50}
        height={50}
      />
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <button onClick={() => navigate(`/todolist/${todo.id}`)}>
          내용보기
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
