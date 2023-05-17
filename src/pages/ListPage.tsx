import React, { useState } from 'react';
import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';

export interface TodoObj {
  text: string;
  checked: boolean;
}

const ListPageContainer = styled.div`
  margin: 0 auto;
`;

const ListPage: React.FC = () => {
  const [todos, setTodos] = useState<TodoObj[]>([]);
  //   const [text, setText] = useState('');

  const addTodo = (text: string) => {
    const newTodo: TodoObj = {
      text,
      checked: false,
    };
    const newTodos = [...todos, newTodo];
    setTodos(newTodos);
  };

  const changeChecked = (index: number) => {
    // const todo = todos[index];
    const newTodos = todos.slice();
    newTodos[index].checked = !newTodos[index].checked;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = todos.filter(item => {
      return todos.indexOf(item) !== index;
    });
    setTodos(newTodos);
  };

  return (
    <ListPageContainer>
      <TodoInput addFunc={addTodo}></TodoInput>
      <TodoList todoList={todos} changeChecked={changeChecked} removeTodo={removeTodo}></TodoList>
    </ListPageContainer>
  );
};

export default ListPage;
