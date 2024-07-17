import { makeStyles } from "@fluentui/react-components";
import { FC } from "react";


const useStyles = makeStyles({
    root: {
        display: "flex",
        margin: "8px"
    },
});

const LandScapeRekeningScreen: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>Rekening AKUTANSI</div>
    );
};

export default LandScapeRekeningScreen;