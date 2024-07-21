import { makeStyles } from "@fluentui/react-components";
import { FC } from "react";


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "auto 40px",
        gridTemplateColumns: "auto",
    },
    main: {
        // flex: 1,
        // flexGrow: 4,
        // background: "red",
        
    },
    toolBar: {
        // height: "40px",
        // background: "yellow",
        // alignContent: "end"
        // alignItems: "end"
    }
});

const RekeningPortraitLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.main}>main</div>
            <div className={styles.toolBar}>bottom tool bar</div>
        </div>
    );
};

export default RekeningPortraitLayout;