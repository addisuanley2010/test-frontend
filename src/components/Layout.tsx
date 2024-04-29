import { Outlet } from "react-router-dom";
import Header from "./Header";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getMusicLoading } from "../redux/features/musicSlice";
import SideNav from "./SideNav";
import styled from "styled-components";


const ParentStyle = styled.div`
margin-top: 7%;
 @media(max-width:900px){
margin-top: 16%;
        }
        @media(max-width:768px){
margin-top: 19%;
        }
`




const Layout = () => {

        const dispatch = useDispatch()
        useEffect(() => {
                dispatch({ type: 'GET_STATISTICS' })

                dispatch(getMusicLoading())

        }, [dispatch])


        return (
                <>
                        <Header />
                        <SideNav />
                        <ParentStyle /> 
                        {/* to give more marigin because the header are fixed */}
                        <Outlet />
                </>
        );
};

export default Layout;