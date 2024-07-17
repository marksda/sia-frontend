import { Button, makeStyles, Subtitle1 } from "@fluentui/react-components";
import { tokens } from "@fluentui/react-components";
import {
    LineHorizontal320Filled
} from "@fluentui/react-icons";
import { FC } from "react";

interface IAppBarFluentUIProps {
    title: string,
    isOpen: boolean;
    openDrawer: () => void;
};

const useStyles = makeStyles({
    container: {
        display: "flex",
        backgroundColor: tokens.colorBrandBackground,
        height: tokens.lineHeightHero800,
        color: tokens.colorNeutralForegroundInverted,
    },
    btnApp: {
        margin: '8px',
    },
    iconApp: {
        color: tokens.colorNeutralForegroundInverted,
    },
    titleApp: {
        paddingLeft: "32px",
        alignSelf: "center"
    }
});

const AppBar: FC<IAppBarFluentUIProps> = ({isOpen, openDrawer, title}) => {
    const styles = useStyles();
    return (
        <div className={styles.container}>
            {!isOpen &&
                <Button 
                shape="square"
                icon={<LineHorizontal320Filled className={styles.iconApp}/>}
                appearance="transparent"
                className={styles.btnApp}
                onClick={openDrawer}
            />
            }
            <Subtitle1 className={styles.titleApp}>{title}</Subtitle1>
        </div>
    );
};

export default AppBar;