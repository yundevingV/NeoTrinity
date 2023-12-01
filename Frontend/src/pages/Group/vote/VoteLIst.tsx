import React from "react";

import { styled } from "styled-components";
import FetchGroupBoard from "../../../components/group/board/model/FetchGroupBoard";
import GroupBoardItems from "../../../components/group/board/view/GroupBoardItem";

const Container = styled.div`
width : 70vw;

margin : 0 auto;

@media (max-width: 428px){
    width: 100vw;
}

h1 {
    
    display : flex; 
    justify-content : start;    
}
`

const NoticeContainer = styled.div`
width : 60vw;

display : flex;
flex-direction : column;
justify-content : center;

padding : 0px 20px;

background : #fff;
border : 1px solid #e2e2e2;
border-radius : 15px;

margin : 0 auto;
`




export default function VoteList(){
    let {data} = FetchGroupBoard();

    return(
        <Container>

            <h1>
                GDSC 
            </h1>

            {/* 그룹 공지 */}

            <NoticeContainer>
                <h1>공지사항</h1>

                <GroupBoardItems items={data}/>

                
            </NoticeContainer>


        </Container>
  )}