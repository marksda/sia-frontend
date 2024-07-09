import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";
import { useAppSelector } from "../../app/redux-hooks";
import { Navigate } from "react-router-dom";

export const HomeScreen = (props: ButtonProps): React.ReactElement => {
    const token = useAppSelector(state => state.persisted.token); 

    return (
        <>
        {
            token == null ? 
            <Navigate to="/login" replace={true} />
            :
            <Button {...props}>Example</Button>
        }
        </>        
    );
};