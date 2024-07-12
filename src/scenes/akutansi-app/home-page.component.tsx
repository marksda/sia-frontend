import { useAppSelector } from "../../features/state-engine/redux-hooks";
import { Navigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";
import PortraitHomeScreen from "../../layout/akutansi-app/home-portrait";
import LandScapeHomeScreen from "../../layout/akutansi-app/home-landscape";

const HomeScreen = () => {    
    const token = useAppSelector(state => state.persisted.token); 
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return token == null ? <Navigate to="/login" replace={true} /> : isPortrait == true ? <PortraitHomeScreen /> : <LandScapeHomeScreen />;
};

export default HomeScreen;

