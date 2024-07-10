import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";
import { useAppSelector } from "../../features/state-engine/redux-hooks";
import { Navigate } from "react-router-dom";



const HomeScreen = (props: ButtonProps) => {    
    const token = useAppSelector(state => state.persisted.token); 

    return token == null ? <Navigate to="/login" replace={true} /> : <Button {...props}>Example</Button>;
};

export default HomeScreen;

