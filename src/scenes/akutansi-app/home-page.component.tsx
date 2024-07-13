import { useMediaQuery } from "react-responsive";
import PortraitHomeScreen from "../../layout/akutansi-app/home-portrait";
import LandScapeHomeScreen from "../../layout/akutansi-app/home-landscape";

const HomeScreen = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <PortraitHomeScreen /> : <LandScapeHomeScreen />;
};

export default HomeScreen;

