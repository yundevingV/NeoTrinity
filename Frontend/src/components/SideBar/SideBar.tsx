import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { AiOutlineMenu } from "react-icons/ai";
import { useMediaQuery } from "react-responsive";

import NavLink from "./NavLink";

function SideBar({ content }: { content: ReactNode }) {
  //toggle sidebar for mobile
  const isMobile = useMediaQuery({
    query: "(max-width:428px)"
  });

  const [isOpen, setIsOpen] = useState(false);
  const [xPosition, setXPosition] = useState('-80vw');

  function toggleSidebar() {
    setIsOpen(!isOpen);
    if (isOpen) {
      setXPosition('0');
    }
    else {
      setXPosition('-80vw');
    }
  }

  return (
    <Container>
      <TopBar>
      <ToggleButtonContainer onClick={toggleSidebar}>
            <AiOutlineMenu style={{ width: '20px', height: '20px', color: 'white' }} />
          </ToggleButtonContainer>
          <Title>NeoTrinity</Title>
          <LogoutText>로그아웃</LogoutText>

      </TopBar>
      <Side style={{ transform: isMobile? `translatex(${xPosition})`: 'none', transition: '0.3s' }}>
        <ProfileContainer>
          <ProfilePicture></ProfilePicture>
          <Introduction>유지호<br></br><br></br>2018216216<br></br></Introduction>
        </ProfileContainer>

      <NavLink url="/" label="Main" />
      <NavLink url="/group" label="Group" />
      <NavLink url="/reservation" label="Reservation" />

      </Side>
      <Content>
        {content}
      </Content>
    </Container>
  );
}

export default SideBar;

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  @media (max-width: 428px){
    width: 100vw;
    height: 60px;
    background-color: #0077B6;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    margin: 0 !important;
    

  //타이틀에 링크를 달까 말까
    color: white;
  }

  width: 0px;
  height: 0px;
  overflow: hidden;

`
const LogoutText = styled.div`
  padding-right: 3vw;
  font-size: 10px;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 50px;
  font-weight: 500;
  font-size: 30px;
  flex: 1;
  margin-left: 10px;
`

const Side = styled.div`
  position: fixed;
  display: flex;
  background-color: #0077B6;
  width: 15%;
  height: 928px; 
  flex-direction: column;
  

  @media (max-width: 428px){
   width : 80vw;
   z-index: 1;
   margin-top: 60px;
  }
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 15%;

  @media (max-width: 428px){
    margin-left: 0;
    margin-top: 60px;
    padding: 0;
  }
`;

const ProfileContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 20px;
`;

const ProfilePicture = styled.div`
  width: 100px;
  height: 100px;
  background-color: white;
  border-radius: 50%;
  margin-right: 20px;
`;

const Introduction = styled.p`
  flex: 1;
  color: white;
`;

const ToggleButtonContainer = styled.div`
  width: 50px;
  height: 50px;
  cursor: pointer;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`
