import { Button, makeStyles, Title3 } from "@fluentui/react-components";
import { tokens } from "@fluentui/react-components";
import {
    LineHorizontal320Filled
} from "@fluentui/react-icons";

const useStyles = makeStyles({
    container: {
      display: "flex",
    //   gap: "5px",
      backgroundColor: tokens.colorBrandBackground,
      height: tokens.lineHeightHero700,
      color: tokens.colorStrokeFocus1,
      padding: "8px"
    },
    iconApp: {
        color: tokens.colorStrokeFocus1,
    },
    titleApp: {
        paddingLeft: "16px"
    }
});

const AppBar = () => {
    const styles = useStyles();

    return (
        <div className={styles.container}>
            <Button 
                shape="square"
                icon={<LineHorizontal320Filled className={styles.iconApp}/>}
                appearance="primary"
            />
            <Title3 className={styles.titleApp}>Laporan</Title3>
        </div>
    );
};

export default AppBar;