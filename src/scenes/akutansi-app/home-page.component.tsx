import { useMediaQuery } from "react-responsive";
import HomeLandScapeLayout from "../../layout/akutansi-app/landscape/home-landscape";
import HomePortraitLayout from "../../layout/akutansi-app/portrait/home-portrait";
import { FC } from "react";
import RekeningPortraitLayout from "../../layout/akutansi-app/portrait/rekening-portrait";
import RekeningLandScapeLayout from "../../layout/akutansi-app/landscape/rekening-landscape";
import RekeningKodePortraitLayout from "../../layout/akutansi-app/portrait/rekening-kode-portrait";
import RekeningKodeLandScapeLayout from "../../layout/akutansi-app/landscape/rekening-kode-landscape";

export const HomeScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <HomePortraitLayout /> : <HomeLandScapeLayout />;
};

export const HomePembukuanScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <RekeningPortraitLayout /> : <RekeningLandScapeLayout />;
};

export const HomePembukuanAkunScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <RekeningKodePortraitLayout /> : <RekeningKodeLandScapeLayout />;
};

export const HomePembukuanAkunKodeScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <RekeningKodePortraitLayout /> : <RekeningKodeLandScapeLayout />;
};

export const HomePembukuanJurnalScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <HomePortraitLayout /> : <HomeLandScapeLayout />;
};
