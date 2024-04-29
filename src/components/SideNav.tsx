import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../store';
import { toggleSideNav } from '../redux/features/sideNavSlice';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { FaHome } from 'react-icons/fa';

const SideNavContainer = styled.div`
  width: 250px;
  height: 100vh;
  background-color: #f2f2f2;
  display: none;
  @media(max-width: 768px){
display: block;
position: fixed;
top: 10%;

  }
  
`;

const SideNavContent = styled.div`
  padding: 20px;
`;

const NavItem = styled.div`
  margin-bottom: 10px;
  cursor: pointer;
`;

export const NavText = styled.span`
  font-size: 16px;
  color: #333;
`;



const SideNav: React.FC = () => {
        const dispatch = useDispatch();
        const isSideNavOpen: boolean = useSelector((state: RootState) => state.sideNav.isOpen);

        const handleToggleSideNav = () => {
                dispatch(toggleSideNav());
        };
        if (isSideNavOpen) {
                return (
                        <SideNavContainer >
                                <SideNavContent>
                                        <NavItem onClick={handleToggleSideNav}>
                                                <NavText>            <Link to="/"><FaHome /> Home</Link>
                                                </NavText>
                                        </NavItem>
                                        <NavItem onClick={handleToggleSideNav}>
                                                <NavText>            <Link to="/create-music">Create Music</Link>
                                                </NavText>
                                        </NavItem>
                                        <NavItem onClick={handleToggleSideNav}>
                                                <NavText>            <Link to="/statistics">Statistics</Link>
                                                </NavText>
                                        </NavItem>
                                </SideNavContent>
                        </SideNavContainer>
                );
        } {
                return <></>
        }
};

export default SideNav;