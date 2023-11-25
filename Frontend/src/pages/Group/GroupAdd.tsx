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

h1 {
    margin : 30px 6vw;

    @media screen and (min-width: 1200px) {
        margin : 30px 10vw;

}
    display : flex; 
    justify-content : start;    
}
`

export default function GroupAdd(){
    const {addGroupBoard} = AddGroupBoard();

    const [formData, setFormData] = useState<FormData>({
        title: "ㄴ",
        description: "ㄴ",
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

            <h1>
                GDSC 
            </h1>

            <h1>공지</h1>
            <button onClick={addHandler}>
                작성하기
            </button>
            


        </Container>
  )}