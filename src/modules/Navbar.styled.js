import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavItem = styled.li`
  
  text-decoration: none;
  color: red;
  display: inline-block;
  padding: 10px 15px;
  border: solid orange 1px;
  border-radius: 10px;
  cursor: pointer;
  margin-right: 10px;
`;

export const NavList = styled.ul`
font-size:20px;
list-style: none;
display: flex;
/* justify-content: center; */
`
export const Ref = styled(NavLink)`
text-decoration:none;
  color: black;

  &.active {
    color: orange;
    font-weight: bold;
  }
`;