import React, { useState } from "react";

import { styled } from "styled-components";

interface FormData {
    startDateYear: string,
    startDateMonth: string,
    startDateDay: string,
    startTime : string,
    endDateYear : string,
    endDateMonth : string,
    endDateDay : string,
    endTime : string,
    title : string,
    description: string,
  }

interface OnclickProps{
  onClose : () => void;
}

const ModalBackground = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
`;

const Container = styled.div`
width: 600px;
height: 800px;

margin : 20px auto;

background-color: #FCFCFC;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`

const ContentContainer = styled.div`

margin : 30px;

width : 80%;


`
interface InputProps {
  width : string;
  height: string;
}
const Input = styled.input<InputProps>`
  width: ${(props) => props.width};
  padding: 10px;
  box-sizing: border-box;
  height: ${(props) => props.height};
  /* Add other styling as needed */
`;

const ButtonContainer = styled.div`

`
interface ButtonProps {
  color : string;
  background : string;
}
const Button = styled.button<ButtonProps>`
  width : 100px;
  height : 40px;
  margin-right : 20px;

  background: ${(props) => props.background};
  border : 0px;
  border-radius : 8px;

  color : ${(props) => props.color};

`

export default function VoteAdd({onClose} : OnclickProps){
    // const {addGroupVote} = AddGroupVote();

    const [formData, setFormData] = useState<FormData>({
        startDateYear: "",
        startDateMonth : "",
        startDateDay : "",
        startTime : "",
        endDateYear : "",
        endDateMonth : "",
        endDateDay : "",
        endTime : "",
        title : "",
        description: "",
      });

      const { startDateYear, startDateMonth, startDateDay, startTime, endDateYear, endDateMonth, endDateDay, endTime, title, description} = formData;
    
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const addHandler = () => {
        console.log(formData)
        // addGroupBoard({title,description,status});
        // onClose();
    }

    
    return(
      <ModalBackground>
        <Container>
            <h2>투표 작성하기</h2>

            <ContentContainer>
              <Input
                width="90%"
                height='50px'
                placeholder="제목을 입력해주세요" 
                name='title'
                value={title}
                onChange={onInputChange}
                />
            </ContentContainer>

            <ContentContainer>
                <h4>투표 시작 기간</h4>
              <Input
                width='15%'
                height='30px'
                placeholder="" 
                name='startDateYear'
                value={startDateYear}
                onChange={ onInputChange }
                type='text'
                />
                
                <Input
                width='15%'
                height='30px'
                placeholder="" 
                name='startDateMonth'
                value={startDateMonth}
                onChange={ onInputChange }
                type='text'
                />
                <Input
                width='15%'
                height='30px'
                placeholder="" 
                name='startDateDay'
                value={startDateDay}
                onChange={ onInputChange }
                type='text'
                />
                
                <Input
                width='15%'
                height='30px'
                placeholder="시간" 
                name='startTime'
                value={startTime}
                onChange={ onInputChange }
                type='text'
                />
            </ContentContainer>

            <ContentContainer>
            <h4>투표 종료 기간</h4>
              <Input
                width='15%'
                height='30px'
                placeholder="" 
                name='endDateYear'
                value={endDateYear}
                onChange={ onInputChange }
                type='text'
                />
                <Input
                width='15%'
                height='30px'
                placeholder="" 
                name='endDateMonth'
                value={endDateMonth}
                onChange={ onInputChange }
                type='text'
                />
                <Input
                width='15%'
                height='30px'
                placeholder="" 
                name='endDateDay'
                value={endDateDay}
                onChange={ onInputChange }
                type='text'
                />
                <Input
                width='15%'
                height='30px'
                placeholder="시간" 
                name='endTime'
                value={endTime}
                onChange={ onInputChange }
                type='text'
                />
            </ContentContainer>
            <ContentContainer>
              <Input
                width="90%"
                height='200px'
                placeholder="내용을 입력해주세요"
                name='description'
                value={description}
                onChange={onInputChange}

                />
            </ContentContainer>
            <ButtonContainer>
              <Button background='#f34747' color='#000' onClick={onClose}>
                취소하기
              </Button>
              <Button background='#4d4df5' color='#fff' onClick={addHandler}>
                작성하기
              </Button>
            </ButtonContainer>
        </Container>
      </ModalBackground>
  )}