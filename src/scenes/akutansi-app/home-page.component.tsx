import { useMediaQuery } from "react-responsive";
import HomeLandScapeLayout from "../../layout/akutansi-app/landscape/home-landscape";
import HomePortraitLayout from "../../layout/akutansi-app/portrait/home-portrait";
import { FC } from "react";

const HomeScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <HomePortraitLayout /> : <HomeLandScapeLayout />;
};

export default HomeScreen;

