import React, { useEffect, useState } from "react";

import { styled } from "styled-components";
import FetchGroupBoardDetail from "../../../components/group/board/model/FetchGroupBoardDetail";

interface DataProps{
    description: string;
    id: number;
    status: string;
    title: string;
}

const Container = styled.div`
width : 70vw;

margin : 0 auto;

@media (max-width: 428px){
    width: 100vw;
}


`

const NoticeContainer = styled.div`
width : 70vw;

@media (max-width: 428px){
 width   : 100vw;
}


`


const NoticeItem = styled.div`
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
const BP = styled.div`
display: flex;
justify-content: start;
margin-bottom : 10px;
font-size : 20px;

`

const LP = styled.div`
display: flex;
justify-content: start;

color : #4f4c4c;
font-size : 16px;
margin-bottom : 15px;


`

const Comment = styled.div`
width : 70%;
margin : 5px auto;
padding : 20px 15px;

background : #f0f0f0;
border-radius : 12px;

display : flex;

@media (max-width: 428px){
    width: 84vw;
    height: 6vh;
    align-items: center;
}

`

const Avator = styled.div`
img{
    width : 70px;
    height : 70px;

    border-radius : 8px;

    @media screen and (max-width: 428px) {
        width: 50px;
        height: 50px;
    }
}
`
const Right = styled.div`
display : flex;
flex-direction : column;

`
const Name = styled.div`
margin : 0px 20px 10px;

text-align: left; /* Add this line to align text to the left */

P{
    font-weight : 1000;
}

`

const Content = styled.div`
margin : 0px 20px;

`


export default function GroupNoticeDetail(){
    let { data } = FetchGroupBoardDetail();
    console.log(data)
    const dateString = data?.createdAt; 
    const time = new Date(dateString);

          
    return(
        <Container>

            <NoticeContainer>

                <NoticeItem>
                    <BP>{data?.user.username}</BP>
                    <LP>{time.getFullYear()}. {time.getMonth() +1}. {time.getDate()}</LP>
                    <BP>{data?.title}</BP>

                    <LP>{data?.description}</LP>

                </NoticeItem>
                
            </NoticeContainer>


        </Container>
  )}