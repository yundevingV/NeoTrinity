import axios from "axios";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-router-dom";

import { styled } from "styled-components";
import FetchGroupBoard from "../../components/group/model/FetchGroupBoard";
import GroupBoardItems from "../../components/group/view/GroupBoardItem";
import GroupAdd from "./GroupAdd";

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

    return (
        <Positioner>

            {/* 그룹 정보 */}
            <GroupContainer>
                <GroupImg>

                    <img src='data:image/jpeg;base64,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' alt='x' />

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
                <h3>
                    투표
                        <AddButton onClick={openAddBoard}>
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