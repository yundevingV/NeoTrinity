import React from "react";
import styled from "styled-components";
import DetailButton from "../components/main/DetailButton";

//TODO: DetailButton 추후에 서버에서 받아온 정보 props로 넘겨야 함.

const Title = styled.p`
    font-size: 30px;
    font-weight: bold;
`

const Container = styled.div`
  display: flex;
  width: 80vw;
  height: 40vh;
  flex-direction: row;
  background-color: grey;
  overflow-x: auto; 
  overflow-y: hidden;
  white-space: nowrap; 
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`

const NoticeBox = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    background-color: gray;
    padding: 20px;
`



function MainPage() {
    return (
        <>
            <Title>My Reservation</Title>
            <Container>
                <DetailButton/>
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
                <DetailButton />
            </Container>
            <Title>My Group</Title>
            <Container>
                <DetailButton/>
                <DetailButton/>
            </Container>
            <Title>Group's Recent Notice</Title>
            <NoticeBox>
                <p>공지1</p>
                <p>공지2</p>
                <p>공지3</p>
            </NoticeBox>
        </>
    )
}

export default MainPage;