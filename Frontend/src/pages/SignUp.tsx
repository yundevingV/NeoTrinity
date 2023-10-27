import React,{useState , useEffect} from "react";

import { styled ,css } from "styled-components";

import axios from "axios";


export default function SignUp(){

    const [formData, setFormData] = useState({
      email : "",
      pwd : "",
      userName : "",
    });
  
    const { email, pwd, userName } = formData;
  
    const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target;
      setFormData({
        ...formData,
        [name]: value,
      });
    };

    const signUp = (e: React.MouseEvent) => {
        e.preventDefault(); // Prevent the default form submission behavior.
        

            // 공백 여부 검사
    if (email.trim() === '' || pwd.trim() === '' || userName.trim() === '') {
        alert('빈칸을 모두 채워주세요.'); // 공백인 경우 알람 창을 띄움.
        return; 
    } 
        
        const data = {
            email: email,
            pwd : pwd,
            username: userName,
        };
        const config = {};
        axios
            .post(`http://bookstore24.shop/auth/register`, data, config)
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

            <JoinContainer>

                {/* 아이디 */}
                <InputContainer >

                    <Form>

                        <Div>
                            <P>이메일</P>
                        </Div>

                        <Input 
                            placeholder='이메일을 입력해주세요'
                            name="email" 
                            value={email}
                            onChange={onInputChange} />

                    </Form>
                </InputContainer>

                {/* 비밀번호 */}
                <InputContainer >
                    <Form>
                        <Div>
                            <P>비밀번호</P>
                        </Div>

                        <Input 
                            placeholder='비밀번호를 입력해주세요' 
                            name="pwd" 
                            value={pwd}
                            onChange={onInputChange} />


                    </Form>
                </InputContainer>

                <InputContainer >

                    <Form>

                        <Div>
                            <P>이름</P>
                        </Div>

                        <Input 
                            placeholder='이름을 입력해주세요'
                            name="userName" 
                            value={userName}
                            onChange={onInputChange} />
                    </Form>
                </InputContainer>
                
                <ButtonContainer>

                    <SubmitButton onClick={signUp}>
                        제출하기
                    </SubmitButton>
                    
                </ButtonContainer>
            </JoinContainer>

        </Wrapper>  
    )
}


const Wrapper = styled.div`

`

const JoinContainer = styled.div`
width : 550px;
height : 550px;

font-family: arial;
font-size: 24px;

margin: 0 auto;
padding : 10px;

border : 2px solid #e2e2e2;

position : relative;
top:5vh;

display : flex;
flex-direction : column;
justify-content: space-around;
`

const InputContainer = styled.div `

margin: 0 auto;
text-align : center;

`

const Div = styled.div`
margin:0px;
border : 0px;

`

const P = styled.p`
font-size : 12px;
text-align : left;

/* 상 오 하 왼 */
margin : 0px 0px 0px 0px;

color : #212221;

font-family: tway, sans-serif, Arial;
font-weight : bold;

`

const Form = styled.form`

`

const Input = styled.input`
width : 300px;
height : 30px;

margin : 10px;

border : 2px solid #e2e2e2;
padding : 0px;

${(props) =>
    props.password &&
    css`
        width: 300px;
    `}
    
&::placeholder{
    font-family: tway, sans-serif, Arial;
	}

//인풋 창 포커스
&:focus {
    //클릭 했을때 기본(?) 선 안나오게.
    outline: none !important;

    border: 2px solid blue;
    }
`
const Button = styled.button`

//기본 크기가 input > button
height : 31px;
padding : 10px;
font-size : 10px;

background-color: #ffffff;
border : 2px solid #033bfa;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }


`    


const ButtonContainer = styled.div`
margin: 0 auto;
text-align : center;
`

const SubmitButton = styled.button`
//기본 크기가 input > button
width : 200px;
height : 35px;

font-size : 12px;

margin : 10px;
padding : 5px;

background-color: #ffffff;
border : 2px solid #033bfa;
border-radius : 5px;
color : #033bfa;

font-family: tway, sans-serif, Arial;

&:hover {

    background-color: #033bfa;
    border : 2px solid #ffffff;
    color : #ffffff;

    cursor : pointer;
    }
`