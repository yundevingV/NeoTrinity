import axios from "axios";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { styled } from "styled-components";

import GroupAdd from "./GroupAdd";
import VoteAdd from "../vote/VoteAdd";
import FetchGroupBoard from "../../../components/group/board/model/FetchGroupBoard";
import GroupBoardItems from "../../../components/group/board/view/GroupBoardItem";

export default function Group() {
    let {data} = FetchGroupBoard();
    
    // 공지 게시 모달
    const [isAddBoard,setIsAddBoard] = useState<Boolean>(false);
    
    const openAddBoard = () =>{
        setIsAddBoard(true);
    }
    const closeAddBoard = () =>{
        setIsAddBoard(false);
    }
    // 투표 게시 모달
    const [isAddVote,setIsAddVote] = useState<Boolean>(false);
    
    const openAddVote = () =>{
        setIsAddVote(true);
    }
    const closeAddVote = () =>{
        setIsAddVote(false);
    }
    return (
        <Positioner>

            {/* 그룹 정보 */}
            <GroupContainer>
                <GroupImg>

                    <img src='https://velog.velcdn.com/images/twinklesu914/post/ea095724-b5e1-47da-93d4-37da930c1290/gdsc_logo.png' alt='x' />

                </GroupImg>
                <GroupInfo>
                <h2>
                    GDSC
                </h2>
                <p>
                    GDSC 는 Google Developer Student Club 의 약자입니다.
                    감사합니다.

                </p>

                </GroupInfo>

            </GroupContainer>
            <div style={{ margin: '20px 0' }}></div>

            <Container>
            <h3>
                공지
                    <AddButton onClick={openAddBoard}>
                        +
                    </AddButton>
            </h3>
            {/* 그룹 공지 */}
            {isAddBoard && <GroupAdd onClose={closeAddBoard}/> }
                <GroupBoardItems items={data}/>
                <ShowMore to={'/group/notice'} >+ 더보기</ShowMore>
            </Container>
            <div style={{ margin: '20px 0' }}></div>


            {/* 그룹 투표 */}

            <Container>
            {isAddVote && <VoteAdd onClose={closeAddVote}/> }

                <h3>
                    투표
                        <AddButton onClick={openAddVote}>
                            +
                        </AddButton>
                </h3>
                    <h3>진행중인 투표</h3>
                    <VoteContainer>
                        11월 회식 장소
                    </VoteContainer>

                    <h3>종료된 투표</h3>
                    <VoteContainer>

                        <span>10월 회식 장소</span>
                        <span>9월 회식 장소</span>

                    </VoteContainer>
            </Container>

        </Positioner>
    )
}


const Positioner = styled.div`
width : 70vw;

margin : 0 auto;


h1,h3 {
    
    display : flex; 
    justify-content : start;    
}

@media (max-width:428px) {
    margin: 0;
    
}
`
const GroupContainer = styled.div`
width : 50vw;

padding : 10px;
background : #fff;
border : 1px solid #e2e2e2;
border-radius : 15px;

margin : 0 auto;

display : flex;
justify-content : center;


@media (max-width: 428px){
    margin: 6vw;
    width: 84vw;
}
`
const Container = styled.div`
width : 50vw;

padding : 10px;
background : #fff;
border : 1px solid #e2e2e2;
border-radius : 15px;

margin : 0 auto;

@media (max-width: 428px){
    margin: 6vw;
    width: 84vw;
}
`
const AddButton = styled.button`
background : transparent;
border : 0px;
cursor : pointer;

font-size : 20px;
`


const GroupImg = styled.div`
width : 200px;
height : 200px;
border-radius : 8px;

img  {
    width : 150px;
    height : 200px;

    border-radius : 8px;
    @media (max-width: 428px){
        width: 42vw;
        height: 42vw;
    }
    
}
`
const GroupInfo = styled.div`
height : 200px;

display : flex;
flex-direction : column;
align-items : center;
border-radius : 12px;


@media (max-width: 428px){
    //width: 42vw;
    height: 42vw;
}
`

const VoteContainer = styled.div`
width : 200px;
border-radius : 8px;

display : flex;
flex-direction : column;
justify-content : start;

padding : 10px;

@media (max-width: 428px){
    width: 42vw;
    padding: 10px 0px 0px 0px;
}
`

const ShowMore = styled(Link)`
    text-decoration: none;
    color: black;
`