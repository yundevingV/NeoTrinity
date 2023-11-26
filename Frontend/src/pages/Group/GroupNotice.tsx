import React from "react";

import { styled } from "styled-components";

const Container = styled.div`
width : 70vw;

margin : 0 auto;

@media (max-width: 428px){
    width: 100vw;
}

h1 {
    margin : 30px 6vw;

    @media screen and (min-width: 1200px) {
        margin : 30px 10vw;

}
    display : flex; 
    justify-content : start;    
}
`

const NoticeContainer = styled.div`
width : 70vw;
display : flex;
flex-direction : column;
justify-content : center;

`


const NoticeItem = styled.div`
width : 70%;
height : 50px;

margin : 5px auto;
padding : 0px 15px;

background : #e2e2e2;
border-radius : 12px;

display : flex;
align-items : center;

@media (max-width: 428px){
    width: 78vw;
    margin-left: 6vw;
}

`


export default function Group(){
    return(
        <Container>

            <h1>
                GDSC 
            </h1>


           

            {/* 그룹 공지 */}

            <h1>공지</h1>

            <NoticeContainer>
                <NoticeItem>
                11월 1일날 GDSC 일정
                </NoticeItem>
                <NoticeItem>
                11월 29일날 GDSC 일정
                </NoticeItem>
                
                
            </NoticeContainer>


        </Container>
  )}