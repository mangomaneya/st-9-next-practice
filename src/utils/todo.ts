import { Todos } from "@/types/data";

export const getTodos = async () => {
  const response = await fetch(`http://localhost:4000/todos`);
  if (!response.ok) {
    throw new Error("Failed to fetch todos");
  }
  const data: Todos[] = await response.json();
  return data;
};
