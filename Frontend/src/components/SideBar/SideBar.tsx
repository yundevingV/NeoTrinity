import React, { ReactNode, useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import { AiOutlineMenu } from "react-icons/ai";

function SideBar({ content }: { content: ReactNode }) {
  const isPc = useMediaQuery({
    query: "(min-width:769px)"
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

  const items: { name: string; path: string }[] = [
    { name: 'Main', path: '/' },
    { name: 'Reservation', path: '/reservation' }
  ];

  if (isPc) {
    return (
      <Container>
        <Side>
          <ProfileContainer>
            <ProfilePicture></ProfilePicture>
            <Introduction>프<br></br>로<br></br>필</Introduction>
          </ProfileContainer>
          {items.map((item, i) => {
            return (
              <Menu to={item.path} key={i}>{item.name}</Menu>
            );
          })}
        </Side>
        <Content>
          {content}
        </Content>
      </Container>
    );
  }

  else {
    return (
      <Container>
        <MobileTop>
          <ToggleButtonContainer onClick={toggleSidebar}>
            <AiOutlineMenu style={{ width: '3vh', height: '3vh', color: 'white' }} />
          </ToggleButtonContainer>
          <MobileTitle>NeoTrinity</MobileTitle>
          <LogoutText>로그아웃</LogoutText>
        </MobileTop>
        <MobileSide style={{ transform: `translatex(${xPosition})`, transition: '0.3s' }}>
          <ProfileContainer>
            <ProfilePicture></ProfilePicture>
            <Introduction>프<br></br>로<br></br>필</Introduction>
          </ProfileContainer>
          {items.map((item, i) => {
            return (
              <Menu to={item.path} key={i}>{item.name}</Menu>
            );
          })}
        </MobileSide>
        <MobileContent>
          {content}
        </MobileContent>
      </Container>
    )
  }

}

export default SideBar;

//styled components
const Container = styled.div`
  display: flex;
`;

const MobileTop = styled.div`
  position: fixed;
  display: flex;
  background-color: #0077B6;
  width: 100%;
  height: 8vh;
  align-items: center;
  justify-content: center;
`

const Title = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 8vh;
  color: white;
  font-weight: bold;
  font-size: 40px;
`

const ToggleButtonContainer = styled.div`
  width: 7vh;
  height: 7vh;
  cursor: pointer;
  display: flex;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`

const Side = styled.div`
  position: fixed;
  display: flex;
  background-color: #0077B6;
  width: 15%;
  height: 100vh; 
  flex-direction: column;
`;

const MobileSide = styled.div`
  position: fixed;
  display: flex;
  background-color: #0077B6;
  width: 80vw;
  height: 100vh; 
  margin-top: 8vh;
  flex-direction: column;
`

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 15%;
`;


const MobileContent = styled.div`
  flex: 1;
  margin-top: 8vh;
`

const Menu = styled(Link)`
  color: white;
  font-size: 30px;
  text-decoration: none;
  margin-top: 20px;
  margin-left: 20px;
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

const LogoutText = styled.div`
  color: white;
  padding-right: 3vw;
  font-size: 15px;
`

const MobileTitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50%;
  height: 8vh;
  color: white;
  font-weight: bold;
  font-size: 40px;
  flex: 1;
`