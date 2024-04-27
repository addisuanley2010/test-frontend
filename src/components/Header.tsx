import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderStyle, StyledNav } from '../styles/Header.style';

const Header = () => {
  return (
    <HeaderStyle>
     
      <StyledNav>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/create-music">Create Music</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
      </StyledNav>
    </HeaderStyle>
  );
};

export default Header;