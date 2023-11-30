import { stringify } from "querystring";
import React, { useState } from "react";

import { styled } from "styled-components";
import AddGroupVote from "../../../components/group/vote/model/AddGroupVote";
import CandidateInput from "../../../components/group/vote/view/CandidateInput";

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
    candidate : string,
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
width: 60vw;
height: 85vh;
overflow-y: auto;
margin : 20px auto;

background-color: #FCFCFC;
display: flex;
flex-direction: column;
align-items: center;
justify-content: start;

`

const ContentContainer = styled.div`

margin : 30px;

width : 80%;

display : flex;
justify-content: center; /* Add space between DateInputs */

  & > * {
    margin-right: 10px; /* Add right margin to all direct children */
  }
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

const DateInput = styled.input`
  width : 20%;
  height : 30px;

  border : none;
  border-bottom: 1px solid #e2e2e2; /* You can adjust the color and thickness as needed */
  text-align: center; /* Center the text value */

  &::placeholder{
    text-align : center;
  }
  
`

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
    const {addGroupVote} = AddGroupVote();

    const [formData, setFormData] = useState<FormData>({
        startDateYear : "",
        startDateMonth : "",
        startDateDay : "",
        startTime : "",
        endDateYear : "",
        endDateMonth : "",
        endDateDay : "",
        endTime : "",
        title : "",
        description: "",
        candidate : '',
      });
      const { startDateYear, startDateMonth, startDateDay, startTime, endDateYear, endDateMonth, endDateDay, endTime, title, description , candidate} = formData;
    
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        
        const { name, value } = e.target;
        if ((name === 'startDateMonth' || name === 'endDateMonth') && (parseInt(value, 10) < 1 || parseInt(value, 10) > 12)) {
          alert('1에서 12까지 입력가능합니다.')
          return; // Do nothing if the value is not within the valid range
        }
    
        if ((name === 'startDateDay' || name === 'endDateDay') && (parseInt(value, 10) < 1 || parseInt(value, 10) > 31)) {
          alert('1에서 31까지 입력가능합니다.')

          return; // Do nothing if the value is not within the valid range
        }
        setFormData({
          ...formData,
          [name]: value,
        });
        
      };

    interface CombineDateProps {
      year : string,
      month : string,
      day : string,
      time : string,
    }

    const combineDate = ({year,month,day,time} : CombineDateProps) =>{
      return `${year}-${month}-${day} ${time}:00`;

    }
    interface CompareDateProps {
      start : string,
      end : string,
    }

    const compareDate = ({start , end} : CompareDateProps) => {
      if(new Date(end).getTime() < new Date(start).getTime()) {
        alert('종료시간이 시작시간보다 빠를 수 없습니다 ! ');
        return;
      } else{
        return true;
      }
    }

    const [candidates, setCandidate] = useState<{ candidate: string}[]>([]);

    const handleCandidateChange = (newInputs : { candidate: string}[]) => {
      setCandidate(newInputs);
    };

    const addHandler = () => {
      const startDate = combineDate({
        year: formData.startDateYear,
        month: formData.startDateMonth,
        day: formData.startDateDay,
        time: formData.startTime,
      });
  
      const endDate = combineDate({
        year: formData.endDateYear,
        month: formData.endDateMonth,
        day: formData.endDateDay, 
        time: formData.endTime,
      });

      if(candidates.length > 2){candidates.pop();}

        if(compareDate({start : startDate, end : endDate})){
          
          addGroupVote({title,description, startDate, endDate, candidates});
        }
        
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
              <Input
                width="90%"
                height='100px'
                placeholder="내용을 입력해주세요"
                name='description'
                value={description}
                onChange={onInputChange}

                />
            </ContentContainer>
            <h4>투표 시작 기간</h4>

            <ContentContainer>

              <DateInput
                placeholder="Year" 
                name='startDateYear'
                value={startDateYear}
                onChange={ onInputChange }
                type='text'
                /> 
                
                <DateInput
                placeholder="Month" 
                name='startDateMonth'
                value={startDateMonth}
                onChange={ onInputChange }
                type='text'
                />

                <DateInput
                placeholder="Day" 
                name='startDateDay'
                value={startDateDay}
                onChange={ onInputChange }
                type='text'
                />
                
                <DateInput
                placeholder="Hour" 
                name='startTime'
                value={startTime}
                onChange={ onInputChange }
                type='text'
                />
            </ContentContainer>

            <h4>투표 종료 기간</h4>

            <ContentContainer>
              <DateInput
                placeholder="Year" 
                name='endDateYear'
                value={endDateYear}
                onChange={ onInputChange }
                type='text'
                />
                <DateInput
                placeholder="Month" 
                name='endDateMonth'
                value={endDateMonth}
                onChange={ onInputChange }
                type='text'
                />
                <DateInput
                placeholder="Day" 
                name='endDateDay'
                value={endDateDay}
                onChange={ onInputChange }
                type='text'
                />
                <DateInput
                placeholder="Hour" 
                name='endTime'
                value={endTime}
                onChange={ onInputChange }
                type='text'
                />
            </ContentContainer>

            <CandidateInput formData={formData.candidate} onCandidateChange={handleCandidateChange}/>
            
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