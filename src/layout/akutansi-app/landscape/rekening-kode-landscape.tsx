import { makeStyles, tokens } from "@fluentui/react-components";
import { FC } from "react";


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "40px auto",
        marginLeft: "1px",
        padding: "16px",
        background: tokens.colorNeutralBackground1,
    },
    header: {
        display: "flex",
        background: tokens.colorNeutralBackground1,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset",
        // width: "95%",
        // justifySelf: "center"
    }
});

const RekeningKodeLandScapeLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.header}>tes</div>
            <div></div>
        </div>
    );
};

export default RekeningKodeLandScapeLayout;