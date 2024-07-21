import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, useRestoreFocusSource } from "@fluentui/react-components";
import { useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import AppBar from "../../../navigation/akutansi-app/akutansi-nav-app-bar";
import PaneNavigator from "../../../navigation/akutansi-app/akutansi-nav-pane";
import { Outlet } from "react-router-dom";
import { toUpperCaseFirstLetter } from "../../../features/utils/parsing-text";

const useStyles = makeStyles({
    content: {
        display: "grid",
        gridTemplateRows: "40px auto",        
        gridTemplateColumns: "auto",
        height: `${window.innerHeight}px`
    },
    drawer: {
        height: "100vh"
    },
    drawerHeader: {
        padding: "12px 24px 8px 24px"
    },
});

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
                    <PaneNavigator mini={false} setIsOpen={setIsOpen} mode="portrait"/>
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