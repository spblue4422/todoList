import React from 'react';
import styled from 'styled-components';
import { TodoPriority, useInputStore } from '../stores/store';

interface TodoInputProps {
  addFunc: (text: string, priority: TodoPriority) => void;
}

const InputContainer = styled.div`
  display: flex;
`;

const InputBox = styled.input``;

const InputButton = styled.button``;

const TodoInput: React.FC<TodoInputProps> = ({ addFunc }) => {
  const { input, setInput } = useInputStore(state => state);

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInput(event.currentTarget.value, input.priority);
  };

  const inputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      addFunc(input.text, input.priority);
      setInput('', 'Medium');
    }
  };

  return (
    <InputContainer>
      <select name="priority">
        <option value="Highest" onChange={() => setInput(input.text, 'Highest')}>
          Highest
        </option>
        <option value="High" onChange={() => setInput(input.text, 'High')}>
          High
        </option>
        <option value="Medium" onChange={() => setInput(input.text, 'Medium')}>
          Medium
        </option>
        <option value="Low" onChange={() => setInput(input.text, 'Low')}>
          Low
        </option>
        <option value="Lowest" onChange={() => setInput(input.text, 'Lowest')}>
          Lowest
        </option>
      </select>
      <InputBox placeholder="텍스트 입력" onChange={inputChange} onKeyDown={inputEnter} value={input.text}></InputBox>
      <InputButton
        onClick={() => {
          addFunc(input.text, input.priority);
          setInput('', 'Medium');
        }}
      >
        추가
      </InputButton>
    </InputContainer>
  );
};

export default TodoInput;
