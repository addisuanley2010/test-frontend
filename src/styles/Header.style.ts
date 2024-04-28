import styled from "styled-components";

export const HeaderStyle = styled.header`
  background-color: #1A1B23;
  color: white;
  padding: 20px;
  font-size: 24px;
  font-weight: bold;
  opacity  :0.9 ;
  overflow-x: auto;
  
`;
export const StyledNav = styled.nav`
display: flex;
list-style: none;

  li {
    margin:10px 20px;

  }

  a {
    text-decoration: none;
    color: white;
    font-weight: bold;
    transition: color 0.5s;

    &:hover {
      color: gray;
    }
   
  }

`