import React from 'react';
import styled from 'styled-components';
import { TodoItem } from '../pages/ListPage';

interface TodoListProps {
  todoList: TodoItem[];
  checkFunc: (id: number) => void;
  modifyFunc: (id: number) => void;
  removeFunc: (id: number) => void;
}

interface ListContentProps {
  checked: boolean;
}

const ListContainer = styled.div``;

const ListItem = styled.div`
  display: flex;
`;

const ListCheckBox = styled.input``;
const ListContent = styled.p<ListContentProps>`
  text-decoration: ${props => (props.checked ? 'line-through' : 'none')};
`;

const ListModifyButton = styled.button``;

const ListDeleteButton = styled.button``;

const TodoList: React.FC<TodoListProps> = ({ todoList, checkFunc, modifyFunc, removeFunc }) => {
  return (
    <ListContainer>
      {todoList.map(item => (
        <ListItem>
          <ListCheckBox type="checkbox" onChange={() => checkFunc(item.id)} checked={item.checked}></ListCheckBox>
          <ListContent checked={item.checked}>{item.text}</ListContent>
          <ListModifyButton onClick={() => modifyFunc(item.id)}>수정</ListModifyButton>
          <ListDeleteButton onClick={() => removeFunc(item.id)}>삭제</ListDeleteButton>
        </ListItem>
      ))}
    </ListContainer>
  );
};

export default TodoList;
