import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";
import { useAppSelector } from "../../features/state-engine/redux-hooks";
import { Navigate, Outlet } from "react-router-dom";
import SignInScreen from "./sign-in.component";



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

