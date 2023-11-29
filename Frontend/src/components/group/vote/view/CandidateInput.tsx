import React, { useState } from "react";

interface CandidateInputProps {
  formData: string;
  onCandidateChange: (newInputs: any[]) => void;
}

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
    <>
      {additionalInputs.map((input, index) => (
        <div key={index}>
          <input
            placeholder={`Candidate ${index + 1}`}
            value={input.candidate}
            onChange={(e) => onAdditionalInputChange(index, e.target.value)}
          />
          <button onClick={() => onRemoveInput(index)}>Remove</button>
        </div>
      ))}
      {/* Button to add more input fields */}
      <button onClick={onAddInput}>Add</button>
    </>
  );
}
