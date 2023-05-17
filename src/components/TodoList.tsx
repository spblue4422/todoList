import React, { useState } from 'react';
import styled from 'styled-components';
import { TodoObj } from '../pages/ListPage';

interface TodoListProps {
  todoList: TodoObj[];
  changeChecked: (index: number) => void;
  removeTodo: (index: number) => void;
}

const ListContainer = styled.div``;

const ListItem = styled.div`
  display: flex;
`;

const ListCheckBox = styled.input``;
const ListContent = styled.p``;

const ListDeleteButton = styled.button``;

const TodoList: React.FC<TodoListProps> = ({ todoList, changeChecked, removeTodo }) => {
  return (
    <ListContainer>
      {todoList.map((item, idx) => (
        <ListItem>
          <ListCheckBox type="checkbox" onChange={() => changeChecked(idx)} checked={item.checked}></ListCheckBox>
          <ListContent style={{ textDecoration: `${item.checked ? 'line-through' : 'none'}` }}>{item.text}</ListContent>
          <ListDeleteButton onClick={() => removeTodo(idx)}>삭제</ListDeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default TodoList;
