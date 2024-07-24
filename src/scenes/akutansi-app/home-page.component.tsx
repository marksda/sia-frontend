import { useMediaQuery } from "react-responsive";
import HomeLandScapeLayout from "../../layout/akutansi-app/landscape/home-landscape";
import HomePortraitLayout from "../../layout/akutansi-app/portrait/home-portrait";
import { FC } from "react";
import PembukuanPortraitLayout from "../../layout/akutansi-app/portrait/pembukuan-portrait";
import PembukuanLandScapeLayout from "../../layout/akutansi-app/landscape/pembukuan-landscape";
import AkunPortraitLayout from "../../layout/akutansi-app/portrait/akun-portrait";
import AkunLandScapeLayout from "../../layout/akutansi-app/landscape/akun-landscape";
import JurnalPortraitLayout from "../../layout/akutansi-app/portrait/jurnal-portrait";

export const HomeScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <HomePortraitLayout /> : <HomeLandScapeLayout />;
};

export const HomePembukuanScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <PembukuanPortraitLayout /> : <PembukuanLandScapeLayout />;
};

export const HomePembukuanAkunScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <AkunPortraitLayout /> : <AkunLandScapeLayout />;
};

export const HomePembukuanJurnalScreen: FC = () => {    
    const isPortrait = useMediaQuery({ maxWidth: 600 });

    return isPortrait == true ? <JurnalPortraitLayout /> : <HomeLandScapeLayout />;
};
