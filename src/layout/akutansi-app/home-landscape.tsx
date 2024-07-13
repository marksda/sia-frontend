import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, useRestoreFocusSource } from "@fluentui/react-components";
import AppBar from "../../navigation/nav-app-bar";
import { useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import PaneNavigator from "../../navigation/nav-pane";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
        // backgroundColor: "#fff",
        // width: "100%",
    },
    content: {
        flex: "1",    
        // display: "grid",
        // gridTemplateColumns: "100%",
        // justifyContent: "flex-start",
        // alignItems: "flex-start",
        // gridRowGap: tokens.spacingVerticalXXL,
        // gridAutoRows: "max-content",
    },
    drawer: {
        height: "100vh",
        backgroundColor: "rgb(237 237 237)",
    },
    drawerHeader: {
        padding: "12px 24px 8px 24px"
    },
    drawerBody: {
        padding: "0px 0px 25px 0px"
    },
});

const LandScapeHomeScreen = () => {
    const styles = useStyles();

    const [isOpen, setIsOpen] = useState(false);
    
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
                separator={false}
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
                    <PaneNavigator />
                </DrawerBody>
            </Drawer>
            <div className={styles.content}>
                <AppBar isOpen={isOpen} openDrawer={openDrawer}/>
                <Outlet />
            </div>
        </div>        
    );
};

export default LandScapeHomeScreen;