import { useMediaQuery } from "react-responsive";
import { FC } from "react";
import RekeningPortraitLayout from "../../layout/akutansi-app/portrait/rekening-portrait";
import RekeningLandScapeLayout from "../../layout/akutansi-app/landscape/rekening-landscape";

const RekeningScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <RekeningPortraitLayout /> : <RekeningLandScapeLayout />;
};

export default RekeningScreen;

