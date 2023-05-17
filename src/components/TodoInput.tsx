import React from 'react';
import styled from 'styled-components';

interface TodoInputProps {
  addFunc: (text: string) => void;
  inputText: string;
  setInputText: React.Dispatch<React.SetStateAction<string>>;
}

const InputContainer = styled.div`
  display: flex;
`;

const InputBox = styled.input``;

const InputButton = styled.button``;

const TodoInput: React.FC<TodoInputProps> = ({ addFunc, inputText, setInputText }) => {
  // const [text, setText] = useState('');

  const inputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(event.currentTarget.value);
  };

  const inputEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key == 'Enter') {
      addFunc(inputText);
      setInputText('');
    }
  };

  return (
    <InputContainer>
      <InputBox placeholder="텍스트 입력" onChange={inputChange} onKeyDown={inputEnter} value={inputText}></InputBox>
      <InputButton
        onClick={() => {
          addFunc(inputText);
          setInputText('');
        }}
      >
        추가
      </InputButton>
    </InputContainer>
  );
};

export default TodoInput;
