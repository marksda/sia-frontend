import { FC } from "react";
import { makeStyles, tokens } from "@fluentui/react-components";
import BottomNavBar from "../../../navigation/bottom-nav-bar";
import {
    CalendarMonthRegular,
    CalendarMonthFilled,
    BookRegular,
    BookFilled,
    bundleIcon,
} from "@fluentui/react-icons";
import { Outlet } from "react-router-dom";
import { ItemBar } from "../../../features/entities/item-bar";

const CalendarMonth = bundleIcon(CalendarMonthFilled, CalendarMonthRegular);
const Book = bundleIcon(BookFilled, BookRegular);

// interface IPembukuanPortraitLayoutProps {
//     props?: Partial<DropdownProps>;
// };

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
    bottomToolBar: {
        paddingTop: "8px",
        borderTop: `1px solid ${tokens.colorNeutralBackground3Selected}`,  
    },
});

const DataItemBars: ItemBar[] = [
    {
        id: "akun",
        nama: "Akun",
        link: "/home/pembukuan/akun",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "jurnal",
        nama: "Jurnal",
        link: "/home/pembukuan/jurnal",
        icon: <Book style={{fontSize: 24}}/>
    },
    {
        id: "buku_pembantu",
        nama: "S. Ledger",
        link: "/home/pembukuan/buku_pembantu",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "buku_besar",
        nama: "Ledger",
        link: "/home/pembukuan/buku_besar",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "lain",
        nama: "Lain",
        link: "/home/pembukuan/lain",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "lain2",
        nama: "Lain2",
        link: "/home/pembukuan/lain2",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
    {
        id: "lain3",
        nama: "Lain3",
        link: "/home/pembukuan/lain3",
        icon: <CalendarMonth style={{fontSize: 24}}/>
    },
];

const PembukuanPortraitLayout: FC = () => {
    const styles = useStyles();
    

    return (
        <div className={styles.root}>            
            <div className={styles.main}>
                <Outlet />
            </div>
            <div className={styles.bottomToolBar}>
                <BottomNavBar data={DataItemBars} />
            </div>
        </div>
    );
};

export default PembukuanPortraitLayout;