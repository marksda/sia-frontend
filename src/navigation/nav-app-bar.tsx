import { Button, makeStyles, Title3 } from "@fluentui/react-components";
import { tokens } from "@fluentui/react-components";
import {
    LineHorizontal320Filled
} from "@fluentui/react-icons";
import { FC } from "react";

interface IAppBarFluentUIProps {
    isOpen: boolean;
    openDrawer: () => void;
};

const useStyles = makeStyles({
    container: {
        display: "flex",
        backgroundColor: tokens.colorBrandBackground,
        height: tokens.lineHeightHero900,
        color: tokens.colorStrokeFocus1,
    },
    btnApp: {
        margin: '8px',
    },
    iconApp: {
        color: tokens.colorStrokeFocus1,
    },
    titleApp: {
        paddingLeft: "32px",
        alignSelf: "center"
    }
});

const AppBar: FC<IAppBarFluentUIProps> = ({isOpen, openDrawer}) => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            {!isOpen &&
                <Button 
                shape="square"
                icon={<LineHorizontal320Filled className={styles.iconApp}/>}
                appearance="primary"
                className={styles.btnApp}
                onClick={openDrawer}
            />
            }
            <Title3 className={styles.titleApp}>Laporan</Title3>
        </div>
    );
};

export default AppBar;