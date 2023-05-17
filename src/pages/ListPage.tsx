import React from 'react';
import styled from 'styled-components';
import TodoInput from '../components/TodoInput';
import TodoList from '../components/TodoList';
import { useTodoStore } from '../stores/store';

const ListPageContainer = styled.div`
  margin: 0 auto;
`;

const ListPage: React.FC = () => {
  const { todos, addTodo, checkTodo, modifyTodo, removeTodo } = useTodoStore(state => state);

  return (
    <ListPageContainer>
      <TodoInput addFunc={addTodo}></TodoInput>
      <TodoList todoList={todos} checkFunc={checkTodo} modifyFunc={modifyTodo} removeFunc={removeTodo}></TodoList>
    </ListPageContainer>
  );
};

export default ListPage;
