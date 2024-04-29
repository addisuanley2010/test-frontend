import { Link } from 'react-router-dom';
import { HeaderStyle, MobileView, StyledNav } from '../styles/Header.style';
import { FaBars, FaCreativeCommonsPd } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleSideNav } from '../redux/features/sideNavSlice';
import { FaHome } from 'react-icons/fa';

const Header = () => {
const dispatch=useDispatch()
  const handleToggleSideNav = () => {
                dispatch(toggleSideNav());
        };

  return (
    <HeaderStyle>
     
      <StyledNav>
          <li>
            <Link to="/"><FaHome/>Home </Link>
          </li>
          <li>
            <Link to="/create-music">Create Music</Link>
          </li>
          <li>
            <Link to="/statistics">Statistics</Link>
          </li>
      </StyledNav>
      <MobileView>
               <FaBars onClick={handleToggleSideNav}/>

      </MobileView>

    </HeaderStyle>
  );
};

export default Header;