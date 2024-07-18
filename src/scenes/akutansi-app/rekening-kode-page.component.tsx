import { useMediaQuery } from "react-responsive";
import { FC } from "react";
import RekeningKodeLandScapeLayout from "../../layout/akutansi-app/landscape/rekening-kode-landscape";
import RekeningKodePortraitLayout from "../../layout/akutansi-app/portrait/rekening-kode-portrait";

const RekeningKodeScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <RekeningKodePortraitLayout /> : <RekeningKodeLandScapeLayout />;
};

export default RekeningKodeScreen;

