import React, { useState } from "react";
import { styled } from "styled-components";
import { useMediaQuery } from "react-responsive";
import axios from "axios";
import useLogin from "../components/login/hooks/useLogin";

interface FormData {
  email: string;
  password: string;
}

interface StyledContainerProps {
  isPc: boolean;
}
export default function Login() {
  
  const {login} = useLogin();

  const [formData, setFormData] = useState<FormData>({
    email: "",
    password: "",
  });

  const { email, password } = formData;

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };


  const handleLogin = (e: React.MouseEvent) => {
    e.preventDefault();
    login({ email, password });

  };

  return (
    <Wrapper>
      <StyledContainer>
            <Title>
          <TitleFont>Neo Trinity</TitleFont>
        </Title>
        <InputContainer>
          <form>
            <Input
              placeholder="아이디를 입력해주세요"
              name="email"
              value={email}
              onChange={onInputChange}
            />
            <Input
              placeholder="비밀번호를 입력해주세요"
              name="password"
              value={password}
              onChange={onInputChange}
              type="password"
            />
          </form>
        </InputContainer>
        <ButtonContainer>
          <SubmitButton onClick={handleLogin}>로그인하기</SubmitButton>
        </ButtonContainer>
      </StyledContainer>
    </Wrapper>
  );
}

//styled-component
const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding-top: 20vh;

`;
const Wrapper = styled.div`

`


const Title = styled.div`
margin: 0 auto;
text-align : center;

`

const TitleFont = styled.p`
`

const InputContainer = styled.div`
margin: 0 auto;
text-align : center;

`

const Input = styled.input`
width : 340px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;
padding : 5px;

&::placeholder{
    font-family: tway, sans-serif, Arial;
    padding : 5px;
	}
    
//인풋 창 포커스
&:focus {
    //클릭 했을때 기본(?) 선 안나오게.
    outline: none !important;

    border: 2px solid #bbb9b9;
    }
`

const MenuContainer = styled.div`
width : 350px;

margin: 0 auto;

`

const Menu = styled.span`
font-size : 8px;
margin-right : 1vw;

&:hover {
    color : black;    
    cursor : pointer;
    }

`
const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;

`

const SubmitButton = styled.button`

//기본 크기가 input > button
width : 355px;
height : 40px;

font-size : 20px;
color : #ffffff;

margin-top : 10px;

background-color: #567dfc;

border : 2px solid #ffffff;
border-radius : 8px;
font-family: tway, sans-serif, Arial;

&:hover {
    background-color: #567dfc;

    border : 2px solid #ffffff;

    color : #ffffff;    
    cursor : pointer;
    }
`
