import React, { useState } from 'react';
import styled from 'styled-components';

interface TodoInputProps {
  addFunc: (text: string) => void;
}

const InputContainer = styled.div`
  display: flex;
`;

const InputBox = styled.input``;

const InputButton = styled.button``;

const TodoInput: React.FC<TodoInputProps> = ({ addFunc }) => {
  const [text, setText] = useState('');

  const inputChange = event => {
    setText(event.currentTarget.value);
  };

  const inputKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      addFunc(text);
      setText('');
    }
  };

  return (
    <InputContainer>
      <InputBox
        id={'tdInput'}
        placeholder="텍스트 입력"
        onChange={inputChange}
        onKeyDown={inputKeyDown}
        value={text}
      ></InputBox>
      <InputButton
        onClick={() => {
          addFunc(text);
          setText('');
        }}
      >
        추가
      </InputButton>
    </InputContainer>
  );
};

export default TodoInput;
