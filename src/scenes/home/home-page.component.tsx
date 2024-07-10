import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";
import { useAppSelector } from "../../app/redux-hooks";
import { Navigate, Outlet, Route, Routes } from "react-router-dom";
import { SignInScreen } from "../auth/sign-in.component";

const HomeApp = () => {
    return (
      <Routes>
        <Route path="/" element={<Layout />}>
            <Route index element={<HomeScreen />} />
            <Route path="login" element={<SignInScreen />} />
        </Route>
      </Routes>
    );
}

function Layout() {
    return (
        <Outlet />
    );
}

function HomeScreen(props: ButtonProps) {    
    const token = useAppSelector(state => state.persisted.token); 

    return (
        <>
        {
            token == null ?
            <Navigate to="/login" replace={true} />
            : <Button {...props}>Example</Button> 
        }
        </>
         
    );
};

export default HomeApp;