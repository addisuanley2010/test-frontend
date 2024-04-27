import { Outlet } from "react-router-dom";
import Header from "./Header";

const Layout = () => {
        // const dispatch=useDispatch()
        // useEffect(()=>{

        //     dispatch(getMusicLoading())


        // },[dispatch])


        return (
                <>
                        <Header />
                        <Outlet />
                </>
        );
};

export default Layout;