import { Link } from 'react-router-dom';
import { Adda, HeaderStyle, MobileView, NavText, StyledIcon, StyledNav } from '../styles/Header.style';
import { FaBars, FaCreativeCommonsPd } from "react-icons/fa";
import { useDispatch } from 'react-redux';
import { toggleSideNav } from '../redux/features/sideNavSlice';
import { FaHome } from 'react-icons/fa';
import { PiMusicNotesPlus } from 'react-icons/pi';
import { ImStatsDots } from 'react-icons/im';

const Header = () => {
  const dispatch = useDispatch()
  const handleToggleSideNav = () => {
    dispatch(toggleSideNav());
  };

  return (
    <HeaderStyle>

      <StyledNav>
        <li>
          <Link to="/"><Adda> <StyledIcon><FaHome /></StyledIcon><NavText>Home</NavText></Adda> </Link>
        </li>
        <li>
          <Link to="/create-music"> <Adda><StyledIcon><PiMusicNotesPlus /></StyledIcon><NavText>Create Music</NavText></Adda></Link>
        </li>
        <li>
          <Link to="/statistics"> <Adda><StyledIcon><ImStatsDots /></StyledIcon><NavText>Statistics</NavText></Adda></Link>
        </li>
      </StyledNav>
      <MobileView>
        <FaBars onClick={handleToggleSideNav} />

      </MobileView>

    </HeaderStyle>
  );
};

export default Header;