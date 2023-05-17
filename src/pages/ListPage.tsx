import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export interface TodoItem {
  text: string;
  checked: boolean;
  id: number;
}

const ListPageContainer = styled.div`
  margin: 0 auto;
`;

const ListPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoItem[]>([]);
  const [text, setText] = useState('');

  const addTodo = (text: string) => {
    const newTodo: TodoItem = {
      text,
      checked: false,
      id: todos.length,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const checkTodo = (id: number) => {
    const newTodos = todos.filter(item => {
      if (item.id === id) {
        item.checked = !item.checked;
      }
      return item;
    });
    setTodos(newTodos);
  };

  const modfiyTodo = (id: number) => {
    const newTodos = todos.filter(item => {
      if (item.id === id) {
        item.text = text;
      }
      return item;
    });
    setText('');
    setTodos(newTodos);
  };

  const removeTodo = (id: number) => {
    const newTodos = todos.filter(item => {
      return item.id !== id;
    });
    setTodos(newTodos);
  };

  return (
    <ListPageContainer>
      <TodoInput addFunc={addTodo} inputText={text} setInputText={setText}></TodoInput>
      <TodoList todoList={todos} checkFunc={checkTodo} modifyFunc={modfiyTodo} removeFunc={removeTodo}></TodoList>
    </ListPageContainer>
  );
};

export default ListPage;
