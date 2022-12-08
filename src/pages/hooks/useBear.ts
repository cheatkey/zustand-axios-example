import axios from "axios";
import create from "zustand";
import { combine } from "zustand/middleware";

interface ITodoItem {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

interface IBearState {
  isLoading: boolean;
  todoList: ITodoItem[];
}

const initialState: IBearState = { isLoading: false, todoList: [] };

const useBear = create(
  combine(initialState, (set, get) => ({
    reset: () => {
      set(initialState);
    },
    loadNewItem: async () => {
      if (get().isLoading) return;

      set({
        isLoading: true,
      });

      const nextItemID = get().todoList.length + 1;
      const todoItem = (
        await axios.get<ITodoItem>(
          `https://jsonplaceholder.typicode.com/todos/${nextItemID}`
        )
      ).data;

      set((state) => ({
        todoList: [...state.todoList, todoItem],
        isLoading: false,
      }));
    },
  }))
);

export default useBear;
