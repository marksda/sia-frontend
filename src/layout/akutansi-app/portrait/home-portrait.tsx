import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, useRestoreFocusSource } from "@fluentui/react-components";
import { useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import AppBar from "../../../navigation/akutansi-app/akutansi-nav-app-bar";
import { Outlet } from "react-router-dom";
import { toUpperCaseFirstLetter } from "../../../features/utils/parsing-text";
import SideNavBar from "../../../navigation/side-nav-bar";
import { ItemBar } from "../../../features/entities/item-bar";
import {
    BookRegular,
    BookFilled,
    SettingsRegular,
    SettingsFilled,
    bundleIcon,
} from "@fluentui/react-icons";

const Book = bundleIcon(BookFilled, BookRegular);
const Setting = bundleIcon(SettingsFilled, SettingsRegular);


const useStyles = makeStyles({
    content: {
        display: "grid",
        gridTemplateRows: "40px auto",        
        gridTemplateColumns: "auto",
        // height: `${window.innerHeight}px`,
        height: '100vh',
    },
    drawer: {
        height: "100vh"
    },
    drawerHeader: {
        padding: "12px 24px 8px 24px"
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

const HomePortraitLayout = () => {
    const styles = useStyles();
    const [isOpen, setIsOpen] = useState(false);
    const restoreFocusSourceAttributes = useRestoreFocusSource();

    const openDrawer = () => {
        setIsOpen(true);
    };

    return (
        <>
            <Drawer
                {...restoreFocusSourceAttributes}
                type="overlay"
                separator
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
                <DrawerBody>
                    <SideNavBar type="standart" hide={!isOpen} data={DataItemBars} setIsOpen={setIsOpen}/>
                </DrawerBody>
            </Drawer>
            <div className={styles.content}>
                <AppBar title={toUpperCaseFirstLetter(location.pathname.split("/")[2])} isOpen={isOpen} openDrawer={openDrawer}/>                
                <Outlet />
            </div>
        </>        
    );
};

export default HomePortraitLayout;