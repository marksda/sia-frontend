import { Navigate } from "react-router-dom";
import { useAppSelector } from "../features/state-engine/redux-hooks";

const AkutansiApp = () => {
    const token = useAppSelector(state => state.persisted.token); 

    return token == null ? <Navigate to="/login" replace={true} /> : <Navigate to="/home/rekening" replace={true} />
};

export default AkutansiApp;