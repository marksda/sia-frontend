import { makeStyles, tokens } from "@fluentui/react-components";
import { FC } from "react";
import ToolBar, { ItemBar } from "../../../component/tool-bar";
import {
    CalendarMonthRegular,
    CalendarMonthFilled,
    bundleIcon,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "auto 58px",
        gridTemplateColumns: "auto",
        height: "100%"
    },
    main: {
        // flex: 1,
        // flexGrow: 4,
        // background: "red",
        // height: "fit-content",
    },
    toolBar: {
        borderTop: `1px solid  ${tokens.colorNeutralBackground3Selected}`,        
        // boxShadow: "rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset",
    }
});

const DataItemBars: ItemBar[] = [
    {
        id: "akun",
        nama: "Akun",
        icon: <CalendarMonth />
    },
    {
        id: "jurnal",
        nama: "Jurnal",
        icon: <CalendarMonth />
    },
    {
        id: "buku_pembantu",
        nama: "Buku Pembantu",
        icon: <CalendarMonth />
    },
    {
        id: "buku_besar",
        nama: "Buku Besar",
        icon: <CalendarMonth />
    },
    {
        id: "lain",
        nama: "Lain-lain",
        icon: <CalendarMonth />
    },
];

const RekeningPortraitLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.main}>main</div>
            <div className={styles.toolBar}>
                <ToolBar data={DataItemBars} />
            </div>
        </div>
    );
};

export default RekeningPortraitLayout;