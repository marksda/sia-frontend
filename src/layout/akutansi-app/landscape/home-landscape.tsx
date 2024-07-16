import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, tokens, useRestoreFocusSource } from "@fluentui/react-components";
import AppBar from "../../../navigation/nav-app-bar";
import { FC, useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import PaneNavigator from "../../../navigation/nav-pane";
import { Outlet } from "react-router-dom";

const useStyles = makeStyles({
    root: {
        display: "flex",
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
    },
    drawer: {
        height: "100vh",
        backgroundColor: tokens.colorNeutralBackground2, 
    },
    drawerHeader: {
        padding: "8px 24px 8px 24px"
    },
    drawerBody: {
        padding: "0px 0px 25px 0px"
    },
});

const LandScapeHomeScreen: FC = () => {
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
                    <PaneNavigator mini={false} />
                </DrawerBody>
            </Drawer>
            <div className={styles.content}>
                <AppBar isOpen={isOpen} openDrawer={openDrawer}/>
                <div className={styles.detailContent}>
                    <PaneNavigator mini={true} show={!isOpen}/>
                    <Outlet />
                </div>
            </div>
        </div>        
    );
};

export default LandScapeHomeScreen;