import React from "react";

import { styled } from "styled-components";
import FetchGroupBoard from "../../../components/group/board/model/FetchGroupBoard";
import GroupBoardItems from "../../../components/group/board/view/GroupBoardItem";

const Container = styled.div`
width : 80vw;

margin : 0 auto;

@media (max-width: 428px){
    width: 100vw;
}

`
const TopContainer = styled.div`
h3{
    color : #767676;
}
`

const NoticeContainer = styled.div`
width : 80vw;

display : flex;
flex-direction : column;
justify-content : center;


background : #fff;
border : 1px solid #e2e2e2;
border-radius : 15px;

margin : 0 auto;
`

export default function Group(){
    let {data} = FetchGroupBoard();
    console.log(data)
    return(
        <Container>
            <TopContainer>
            <h1>공지사항</h1>
            <h3>GDSC</h3>
            </TopContainer>
            {/* 그룹 공지 */}

            <NoticeContainer>
                <GroupBoardItems items={data}/>
                
            </NoticeContainer>


        </Container>
  )}