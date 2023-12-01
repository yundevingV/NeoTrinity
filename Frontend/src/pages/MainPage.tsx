import React from "react";
import styled from "styled-components";
import DetailButton from "../components/main/DetailButton";
import gdsc from "../assets/gdsc.png";
import startup_lounge from '../assets/startup_lounge.jpg';
import {Link} from 'react-router-dom';
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

  @media (max-width: 428px){
    width: 100vw;
    height: 180px;
  }
`

const NoticeBox = styled.div`
    display: flex;
    width: 80vw;
    flex-direction: column;
    background-color: gray;
    padding: 20px;

    @media (max-width: 428px){
     width: 100vw;
     align-items: start;
    }
`
const StyledLink = styled(Link)`
  text-decoration: none;
  color : black;
`


function MainPage() {
    return (
        <>
            <Title>My Reservation</Title>
            <Container>
                <DetailButton src={startup_lounge} description="스타트업 라운지" />

            </Container>
            <Title>My Group</Title>
            <Container>
              <StyledLink to='/group'>
                <DetailButton src={gdsc} description="GDSC"/>
                </StyledLink>
            </Container>
            
        </>
    )
}

export default MainPage;