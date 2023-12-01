import React, { useState } from "react";

import { styled } from "styled-components";
import FetchGroupBoardDetail from "../../../components/group/board/model/FetchGroupBoardDetail";
import { vote } from "../../../utilities/VoteService";

interface DataProps{
    title: string;  
    description: string;    
    cadidates : string;
}

const Container = styled.div`
width : 70vw;

margin : 0 auto;

@media (max-width: 428px){
    width: 100vw;
}
`

const VoteContainer = styled.div`
width : 70vw;

@media (max-width: 428px){
 width   : 100vw;
}


`

const VoteItem = styled.div`
width : calc(70% - 100px);

margin : 5px auto;
padding : 20px 50px;

background : #fff;
border : 1px solid #e2e2e2;
border-radius : 15px;

display : flex;
flex-direction: column;


@media (max-width: 428px){
    width: calc(84vw - 50px);
}
`
const Title = styled.div`
display: flex;
justify-content: start;
margin-bottom : 10px;
font-size : 20px;
`

const Content = styled.div`
display: flex;
justify-content: start;

color : #4f4c4c;
font-size : 16px;
margin-bottom : 15px;
`

const Form = styled.form`
display: flex;
flex-direction: column;
justify-content: center;
`

const Button = styled.button`
margin: 0% 40%;
width: 20%;
height: 30px;
color : #fff;
background-color: #6464e9;
border : 0px;
margin-top: 10px;

`
const Date = styled.span`
display: flex;
justify-content: start;

color : #4f4c4c;
font-size : 16px;
margin-bottom : 15px;
`

const Label = styled.div`
margin-bottom: 10px;
`

export default function VoteDetail(){
    let { data } = FetchGroupBoardDetail();

    const options = ['삼겹살','치킨','부대찌개']; // Add more options as needed
    const [elect, setElect] = useState<string>();

    const handleChange=(e : any)=>{
        setElect( e.target.value);
        console.log(elect)
     }
    const handler = () =>{
        vote('a',1)
        alert('투표를 성공했습니다.')
        

        
    }
    return(
        <Container>

            {/* 그룹 공지 */}


            <VoteContainer>

                <VoteItem>
                <Title>
                    종강 파티 투표
                </Title>
                <Date>
                    2023-12-01 ~ 2023-12-08
                </Date>
                <Content>

                    종강 파티 어디서 진행 할지 투표해주세요
                </Content>
                
                <Form>
                    {options.map((option) => (
                    <Label key={option}>
                        <input
                        type="radio"
                        name="vote"
                        value={option}
                        onChange={handleChange}
                        />
                        {`${option.toUpperCase()}`}
                    </Label>
                    ))}
                    <Button type="button" onClick={handler  }>
                    Vote
                    </Button>
                </Form>
                </VoteItem>
                
               

            </VoteContainer>
            

        </Container>
  )}