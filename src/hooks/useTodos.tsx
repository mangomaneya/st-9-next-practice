import { getTodos } from "@/utils/todo";
import { useQuery } from "@tanstack/react-query";

export const useTodos = () => {
  return useQuery({
    queryKey: ["todos"],
    queryFn: getTodos,
  });
};
