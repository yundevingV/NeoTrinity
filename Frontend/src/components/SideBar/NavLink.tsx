import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";

interface NavLinkProps {
  url: string;
  label: string;
}

const StyledLink = styled(Link)<{ isActive: boolean }>`
  width: 100%;
  height: 50px;
  background: ${props => (props.isActive ? '#68b2da' : 'transparent')};
  font-weight: ${props => (props.isActive ? 'bold' : 'normal')};

  /* 링크 보라색, 밑줄제거 */
  text-decoration: none;
  color: black;

  display: flex;
  align-items: center;
  justify-content: center;
  
  &:hover {
    background: #89c9eb;
  }

  span {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%; 

    color : #fff;
  }
`;

const NavLink = ({ url, label }: NavLinkProps) => {
  const location = useLocation();
  const isActive = location.pathname === url;

  return (
    <StyledLink to={url} isActive={isActive}>
      <span>{label}</span>
    </StyledLink>
  );
};

export default NavLink;