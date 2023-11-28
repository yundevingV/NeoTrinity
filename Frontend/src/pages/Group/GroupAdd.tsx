import React, { useState } from "react";
import AddGroupBoard from "../../components/group/model/AddGroupBoard";

import { styled } from "styled-components";

interface FormData {
    title: string,
    description: string,
    status : string,
  }

const Container = styled.div`
width : 70vw;

margin : 0 auto;


display : flex; 
flex-direction : column;
justify-content : start;    

`

const ContentContainer = styled.div`
margin : 20px;
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

export default function GroupAdd(){
    const {addGroupBoard} = AddGroupBoard();

    const [formData, setFormData] = useState<FormData>({
        title: "엽떡",
        description: "하루종일 엽떡 먹는지호",
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
    }

    
    return(
        <Container>


            <h3>공지 작성하기</h3>

            <ContentContainer>
              <Input
                height='50px'
                placeholder="제목을 입력해주세요" />

            </ContentContainer>

            <ContentContainer>
              <Input
                height='200px'
                placeholder="내용을 입력해주세요" />
                
            </ContentContainer>
            <button onClick={addHandler}>
                작성하기
            </button>
            


        </Container>
  )}