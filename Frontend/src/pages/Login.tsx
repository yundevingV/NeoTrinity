import React,{useState} from "react";


import { styled } from "styled-components";
import {Link} from 'react-router-dom';
import axios from "axios";

export default function Login() {

    const [formData, setFormData] = useState({
        id: "",
        pwd: "",
      });
    
      const { id, pwd } = formData;
    
      const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target; // Use 'name' to identify the field
        setFormData({
          ...formData,
          [name]: value,
        });
      };

    const login = (e: React.MouseEvent) => {
        console.log(formData)
        e.preventDefault(); // Prevent the default form submission behavior.
        

            // 공백 여부 검사
    if (id.trim() === '' || pwd.trim() === '' ) {
        alert('빈칸을 모두 채워주세요.'); // 공백인 경우 알람 창을 띄움.
        return; 
    } 
        
        const data = {
            id : formData.id,
            password : formData.pwd,
            
        };
        const config = {};
        axios
            .post(`http://bookstore24.shop/auth/login`, data, config)
            .then((response) => {
            console.log(`Response : ${response}`);
            console.log(`Response : ${data}`);
            })
            .catch((error) => {
                console.log(error)
            console.log('Error:', error.response.data);
            });
        
        };
    return(
        <Wrapper>

            <LoginContainer>
                <Title>
                    <TitleFont>
                        Neo Trinity
                    </TitleFont>
                </Title>

                <InputContainer>

                <form >

                    <Input 
                        placeholder='아이디를 입력해주세요' 
                        name="id" 
                        value={id}
                        onChange={onInputChange}
                        />
                    
                    <Input 
                        placeholder='비밀번호를 입력해주세요'
                        name="pwd"
                        value={pwd}
                        onChange={onInputChange}
                        type="password"
                        />
                </form>

                </InputContainer>

                {/* <MenuContainer>
                    <Menu>
                        <StyledLink to='/signup' >
                            회원 가입 
                        </StyledLink>
                    </Menu>
                    <Menu>
                        <StyledLink to='/findid'>
                            아이디찾기
                        </StyledLink>
                    </Menu>
                    <Menu> 
                        <StyledLink to='/findpwd'>
                            비밀번호찾기
                        </StyledLink>
                    </Menu>
                </MenuContainer> */}

                <ButtonContainer> 
                    <SubmitButton onClick={login} >
                        로그인하기
                    </SubmitButton>
                </ButtonContainer>

            </LoginContainer>

        </Wrapper>
    )
}

//styled-component 
const StyledLink = styled(Link)`


`
    

const Wrapper = styled.div`

`

const LoginContainer = styled.div`
width : 600px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;


font-family: tway, sans-serif, Arial;

position : relative;
top:5vh;
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
