import React, { ReactNode } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
`;

const Side = styled.div`
  position: fixed;
  display: flex;
  background-color: #0077B6;
  width: 15%;
  height: 100vh; 
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  padding: 20px;
  margin-left: 15%;
`;

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

function SideBar({ content }: { content: ReactNode }) {
  const items: { name: string; path: string }[] = [
    { name: 'Main', path: '/' },
    { name: 'Reservation', path: '/reservation' }
  ];

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

export default SideBar;
