import { makeStyles } from "@fluentui/react-components";
import { FC } from "react";


const useStyles = makeStyles({
    root: {
        display: "flex",
    },
});

const JurnalPortraitLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>Jurnal AKUTANSI</div>
    );
};

export default JurnalPortraitLayout;