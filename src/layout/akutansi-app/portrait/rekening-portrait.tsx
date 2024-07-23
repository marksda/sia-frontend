import { FC } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import BottomNavBar, { ItemBar } from "../../../navigation/bottom-nav-bar";
import {
    CalendarMonthRegular,
    CalendarMonthFilled,
    BookRegular,
    BookFilled,
    bundleIcon,
} from "@fluentui/react-icons";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const Book = bundleIcon(BookFilled, BookRegular);


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateRows: "auto 68px",
        gridTemplateColumns: "auto",
    },
    main: {
        // flex: 1,
        // flexGrow: 4,
        // background: "red",
        // height: "fit-content",
    },
    toolBar: {
        paddingTop: "8px",
        borderTop: `1px solid  ${tokens.colorNeutralBackground3Selected}`,  
    },
});

const DataItemBars: ItemBar[] = [
    {
        id: "akun",
        nama: "Akun",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "jurnal",
        nama: "Jurnal",
        icon: <Book style={{fontSize: 24}}/>
    },
    {
        id: "buku_pembantu",
        nama: "S. Ledger",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "buku_besar",
        nama: "Ledger",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "lain",
        nama: "Lain",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "lain2",
        nama: "Lain2",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "lain3",
        nama: "Lain3",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
];

const RekeningPortraitLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.main}>main</div>
            <div className={styles.toolBar}>
                <BottomNavBar data={DataItemBars} />
            </div>
        </div>
    );
};

export default RekeningPortraitLayout;