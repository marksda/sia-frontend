import { Button } from "@fluentui/react-components";
import type { ButtonProps } from "@fluentui/react-components";
import { useAppSelector } from "../../app/redux-hooks";

export const HomeScreen = (props: ButtonProps): React.ReactElement => {
    const token = useAppSelector(state => state.persisted.token); 

    return (
        <>
        {
            token == null ? <p>Belum Login</p>:<Button {...props}>Example</Button>
        }
        </>        
    );
};