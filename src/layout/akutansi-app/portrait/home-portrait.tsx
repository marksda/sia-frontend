import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, useRestoreFocusSource } from "@fluentui/react-components";
import { useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import AppBar from "../../../navigation/nav-app-bar";

const useStyles = makeStyles({
    root: {
        display: "flex",
        backgroundColor: "#fff",
        width: "100%",
    },
    content: {
        flex: "1",    
        display: "grid",
        gridTemplateColumns: "100%",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        // gridRowGap: tokens.spacingVerticalXXL,
        // gridAutoRows: "max-content",
    },
    drawer: {
        height: "100vh"
    },
    drawerHeader: {
        padding: "12px 24px 8px 24px"
    },
});

const PortraitHomeScreen = () => {
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
                        Default Drawer
                    </DrawerHeaderTitle>
                </DrawerHeader>
                <DrawerBody>
                    <p>Drawer content</p>
                </DrawerBody>
            </Drawer>
            <div className={styles.content}>
                <AppBar isOpen={isOpen} openDrawer={openDrawer}/>
            </div>
        </div>        
    );
};

export default PortraitHomeScreen;