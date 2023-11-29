import React, { useState } from "react";
import AddGroupBoard from "../../../components/group/board/model/AddGroupBoard";

import { styled } from "styled-components";

interface FormData {
    title: string,
    description: string,
    status : string,
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
height: 600px;

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
interface InputHeightProps {
  height: string;
}
const Input = styled.input<InputHeightProps>`
  width: 100%;
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

export default function GroupAdd({onClose} : OnclickProps){
    const {addGroupBoard} = AddGroupBoard();

    const [formData, setFormData] = useState<FormData>({
        title: "",
        description: "",
        status : "public",
      });
    
      const { title, description, status } = formData;
    
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const addHandler = () => {
        addGroupBoard({title,description,status});
        onClose();
    }

    
    return(
      <ModalBackground>
        <Container>
            <h2>공지 작성하기</h2>
            <ContentContainer>
              <Input
                height='50px'
                placeholder="제목을 입력해주세요" 
                name='title'
                value={title}
                onChange={onInputChange}
                />

            </ContentContainer>

            <ContentContainer>
              <Input
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