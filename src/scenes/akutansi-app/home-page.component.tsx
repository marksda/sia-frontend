import { useMediaQuery } from "react-responsive";
import LandScapeHomeScreen from "../../layout/akutansi-app/landscape/home-landscape";
import PortraitHomeScreen from "../../layout/akutansi-app/portrait/home-portrait";

const HomeScreen = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <PortraitHomeScreen /> : <LandScapeHomeScreen />;
};

export default HomeScreen;

