import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, tokens, useRestoreFocusSource } from "@fluentui/react-components";
import AppBar from "../../../navigation/akutansi-app/akutansi-nav-app-bar";
import { FC, useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import { Outlet, useLocation } from "react-router-dom";
import { toUpperCaseFirstLetter } from "../../../features/utils/parsing-text";
import SideNavBar from "../../../navigation/side-nav-bar";
import {
    BookRegular,
    BookFilled,
    SettingsRegular,
    SettingsFilled,
    bundleIcon,
} from "@fluentui/react-icons";
import { ItemBar } from "../../../features/entities/item-bar";

const Book = bundleIcon(BookFilled, BookRegular);
const Setting = bundleIcon(SettingsFilled, SettingsRegular);

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: tokens.colorNeutralBackground2Selected,
    },
    content: {
        flex: "1",    
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "40px auto",
    },
    detailContent: {
        display: "grid",
        gridTemplateColumns: "45px auto",
        gridTemplateRows: "auto",
        gridTemplateAreas: `"main main"`,
        height: "calc(100vh - 40px)",
        '& .hideMiniPanelnav': {
            gridArea: "main",
            background: tokens.colorNeutralBackground1,
        },
        '& .showMiniPanelnav': {
            margin: "4px 0px 4px 4px",
            // border: `1px solid ${tokens.colorNeutralBackground3Selected}`,
            background: tokens.colorNeutralBackground1,
            borderRadius: tokens.borderRadiusXLarge,
            boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
        },
    },
    drawer: {
        height: "100vh",
        minWidth: "180px",
        maxWidth: "190px",
    },
    drawerHeader: {
        padding: "8px 24px 8px 24px"
    },
    drawerBody: {
        padding: "0px 0px 25px 0px",
    },
});

const DataItemBars: ItemBar[] = [
    {
        id: "pembukuan",
        nama: "Pembukuan",
        link: "/home/pembukuan/akun",
        icon: <Book style={{fontSize: 24}}/>
    },
    {
        id: "pelaporan",
        nama: "Pelaporan",
        link: "/home/pelaporan",
        icon: <Book style={{fontSize: 24}}/>
    },
    {
        id: "pengaturan",
        nama: "Pengaturan",
        link: "/home/pengaturan",
        icon: <Setting style={{fontSize: 24}}/>
    },
];

const HomeLandScapeLayout: FC = () => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();
    
    
    // const restoreFocusTargetAttributes = useRestoreFocusTarget();
    const restoreFocusSourceAttributes = useRestoreFocusSource();

    const openDrawer = () => {
        setIsOpen(true);
    };

    return (
        <div className={styles.root}>
            <Drawer
                {...restoreFocusSourceAttributes}
                type="inline"
                separator={true}
                open={isOpen}
                onOpenChange={(_, { open }) => setIsOpen(open)}
                className={styles.drawer}                
            >
                <DrawerHeader className={styles.drawerHeader}>
                    <DrawerHeaderTitle
                        action={
                        <Button
                            appearance="subtle"
                            aria-label="Close"
                            icon={<Dismiss24Regular />}
                            onClick={() => setIsOpen(false)}
                        />
                        }
                    >
                        SIA
                    </DrawerHeaderTitle>
                </DrawerHeader>
                <DrawerBody className={styles.drawerBody}>
                    <SideNavBar type="permanent" hide={!isOpen} data={DataItemBars}/>
                </DrawerBody>
            </Drawer>
            <div className={styles.content}>
                <AppBar title={toUpperCaseFirstLetter(location.pathname.split("/")[2])} isOpen={isOpen} openDrawer={openDrawer}/>
                <div className={styles.detailContent}>
                    <SideNavBar type="mini" hide={isOpen} data={DataItemBars}/>
                    <div className={isOpen == true? 'hideMiniPanelnav':'showMiniPanelnav'}>
                        <Outlet />
                    </div>                    
                </div>
            </div>
        </div>        
    );
};

export default HomeLandScapeLayout;