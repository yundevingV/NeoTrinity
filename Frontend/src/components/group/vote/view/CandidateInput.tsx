import React, { useState } from "react";
import styled from "styled-components";

interface CandidateInputProps {
  formData: string;
  onCandidateChange: (newInputs: any[]) => void;
}
const Container = styled.div`
margin-bottom: 50px;
`
const InputContainer = styled.div`

`
const Input = styled.input`

`

const DeleteButton = styled.button`
  width : 20px;
  height : 20px;

  border : 0px;
  background: transparent;

  cursor: pointer;
`

const PlusButton = styled.button`
  width : 100px;
  height : 20px;

  border : 0px;
  border-radius: 4px;
  background: #74f2b5;
`

export default function CandidateInput({ formData, onCandidateChange }: CandidateInputProps) {
  const [additionalInputs, setAdditionalInputs] = useState([{ candidate: "" }, { candidate: "" }]);

  const onAddInput = () => {
    setAdditionalInputs((prevInputs) => [...prevInputs, { candidate: "" }]);
  };

  const onAdditionalInputChange = (index: number, value: string) => {
    const updatedInputs = [...additionalInputs];
    updatedInputs[index] = {
      ...updatedInputs[index],
      candidate: value,
    };
    setAdditionalInputs(updatedInputs);
    onCandidateChange(updatedInputs);

  };


  const onRemoveInput = (index: number) => {
    const updatedInputs = [...additionalInputs];
    if (updatedInputs.length > 1) {
      updatedInputs.splice(index, 1);
      setAdditionalInputs(updatedInputs);
    } else {
      alert("후보자는 최소 1개 이상이어야 합니다!");
      return;
    }
  };

  return (
    <Container>
      {additionalInputs.map((input, index) => (
        <InputContainer key={index}>
          <Input
            placeholder={`Candidate ${index + 1}`}
            value={input.candidate}
            onChange={(e) => onAdditionalInputChange(index, e.target.value)}
          />
          <DeleteButton onClick={() => onRemoveInput(index)}> X </DeleteButton>
        </InputContainer>
      ))}
      {/* Button to add more input fields */}
      <PlusButton onClick={onAddInput}>추가</PlusButton>
    </Container>
  );
}
