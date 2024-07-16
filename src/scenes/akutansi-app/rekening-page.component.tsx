import { useMediaQuery } from "react-responsive";
import { FC } from "react";
import PortraitRekeningScreen from "../../layout/akutansi-app/portrait/rekening-portrait";
import LandScapeRekeningScreen from "../../layout/akutansi-app/landscape/rekening-landscape";

const RekeningScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <PortraitRekeningScreen /> : <LandScapeRekeningScreen />;
};

export default RekeningScreen;

