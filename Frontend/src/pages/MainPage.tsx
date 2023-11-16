import React from "react";
import styled from "styled-components";
import DetailButton from "../components/main/DetailButton";
import { useMediaQuery } from "react-responsive";

//TODO: DetailButton 추후에 서버에서 받아온 정보 props로 넘겨야 함.

function MainPage() {
    const isPc = useMediaQuery({
        query: "(min-width:769px)"
    });

    if (isPc) {
        return (
            <PCMainPage />
        )
    }
    else {
        return (
            <MobileMainPage />
        )
    }
}
export default MainPage;

function PCMainPage() {
    return (
        <>
            <Title>My Reservation</Title>
            <Container>
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
                <DetailButton />
            </Container>
            <Title>My Group</Title>
            <Container>
                <DetailButton />
                <DetailButton />
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

function MobileMainPage() {
    return (
        <>
            <MobileContainer>
                <Title>My Reservation</Title>
                <MobileItemBox>
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                </MobileItemBox>
                <Title>My Group</Title>
                <MobileItemBox>
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                    <DetailButton />
                </MobileItemBox>
                <Title>Recent Notice</Title>
                <MobileNoticeBox>
                <Notice>Notice 1</Notice>
                <Notice>Notice 2</Notice>
                <Notice>Notice 3</Notice>
                </MobileNoticeBox>
            </MobileContainer>

        </>
    )
}

//Styled components for PC
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

//Styled components for Mobile
const MobileContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
`
const MobileItemBox = styled.div`
  display: flex;
  width: 100vw;
  height: 25vh;
  flex-direction: row;
  background-color: grey;
  overflow-x: auto; 
  overflow-y: hidden;
  white-space: nowrap; 
  align-items: center;
  &::-webkit-scrollbar {
    width: 4px;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #ccc;
  }
`

const MobileNoticeBox = styled.div`
    display: flex;
    width: 100vw;
    flex-direction: column;
    background-color: gray;
    align-items: start;
    padding-left: 2.5vw;
`

const Notice = styled.div`
    display: flex;
    margin-top: 15px;
    width: 95vw;
    border-bottom: 1px black solid;
    align-items: start;
`