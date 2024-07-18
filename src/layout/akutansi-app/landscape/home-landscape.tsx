import { Button, Drawer, DrawerBody, DrawerHeader, DrawerHeaderTitle, makeStyles, tokens, useRestoreFocusSource } from "@fluentui/react-components";
import AppBar from "../../../navigation/akutansi-app/akutansi-nav-app-bar";
import { FC, useState } from "react";
import { Dismiss24Regular } from "@fluentui/react-icons";
import PaneNavigator from "../../../navigation/akutansi-app/akutansi-nav-pane";
import { Outlet, useLocation } from "react-router-dom";

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
        gridTemplateColumns: "55px auto",
        gridTemplateRows: "auto",
        gridTemplateAreas: `"main main"`,
        height: "calc(100vh - 40px)",
        '& .hideMiniPanelnav': {
            gridArea: "main",
            background: tokens.colorNeutralBackground2,

        },
        '& .showMiniPanelnav': {
            margin: "4px 0px 4px 4px",
            border: `1px solid ${tokens.colorNeutralBackground3Selected}`,
            borderRadius: tokens.borderRadiusLarge,
            background: tokens.colorNeutralBackground1,
        },
    },
    drawer: {
        height: "100vh",
        width: "210px"
    },
    drawerHeader: {
        padding: "8px 24px 8px 24px"
    },
    drawerBody: {
        padding: "0px 0px 25px 0px",
    },
});

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
                    <PaneNavigator mini={false} />
                </DrawerBody>
            </Drawer>
            <div className={styles.content}>
                <AppBar title={toUpperCaseFirstLetter(location.pathname.split("/")[2])} isOpen={isOpen} openDrawer={openDrawer}/>
                <div className={styles.detailContent}>
                    <PaneNavigator mini={true} show={!isOpen}/>
                    <div className={isOpen == true? 'hideMiniPanelnav':'showMiniPanelnav'}>
                        <Outlet />
                    </div>                    
                </div>
            </div>
        </div>        
    );
};

function toUpperCaseFirstLetter(title: string) {
    let firstLetter = title.charAt(0);
    let firstLetterCap = firstLetter.toUpperCase();
    let remainingLetters = title.slice(1);
    let capitalizedWord = firstLetterCap + remainingLetters
    return capitalizedWord;
}

export default HomeLandScapeLayout;