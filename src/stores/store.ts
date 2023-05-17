import { create } from 'zustand';

type TodoPriority = 'Highest' | 'High' | 'Medium' | 'Low' | 'Lowest';

interface TodoItem {
  text: string;
  priority: TodoPriority;
  checked: boolean;
  id: number;
}

interface TodoState {
  todos: TodoItem[];
  addTodo: (text: string, priority: TodoPriority) => void;
  checkTodo: (id: number) => void;
  modifyTodo: (id: number, text: string, priority: TodoPriority) => void;
  removeTodo: (id: number) => void;
}

interface InputItem {
  text: string;
  priority: TodoPriority;
}

interface InputState {
  input: InputItem;
  setInput: (text: string, priority: TodoPriority) => void;
}

const useTodoStore = create<TodoState>(set => ({
  todos: [],
  addTodo: (text, priority) =>
    set(state => ({ todos: [...state.todos.slice(), { text, priority, checked: false, id: state.todos.length }] })),
  checkTodo: id =>
    set(state => ({
      todos: state.todos.filter(item => {
        if (item.id === id) {
          item.checked = !item.checked;
        }
        return item;
      }),
    })),
  modifyTodo: (id, text, priority) =>
    set(state => ({
      todos: state.todos.filter(item => {
        if (item.id === id) {
          item.text = text;
          item.priority = priority;
        }
        return item;
      }),
    })),
  removeTodo: id =>
    set(state => ({
      todos: state.todos.filter(item => {
        return item.id !== id;
      }),
    })),
}));

const useInputStore = create<InputState>(set => ({
  input: { text: '', priority: 'Medium' },
  setInput: (text, priority) => set(state => ({ input: { text, priority } })),
}));

export type { TodoPriority, TodoItem, TodoState };
export { useTodoStore, useInputStore };
