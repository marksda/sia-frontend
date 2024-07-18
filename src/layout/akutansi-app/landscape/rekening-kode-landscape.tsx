import { makeStyles, Tab, TabList, tokens } from "@fluentui/react-components";
import { FC } from "react";
import { Outlet } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "200px auto",
        gridTemplateRows: "auto",
    },
    menu: {
        alignItems: "flex-start",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        padding: "16px",
        // rowGap: "20px",
        background: tokens.colorNeutralBackground1,
        height: "calc(100vh - 74px)",
    },
});

const RekeningKodeLandScapeLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                <TabList defaultSelectedValue="kode" vertical>
                    <Tab value="kode">Kode akun</Tab>
                    <Tab value="jurnal">Jurnal</Tab>
                    <Tab value="buku_pembantu">Buku Pembantu</Tab>
                    <Tab value="buku_besar">Buku Besar</Tab>
                </TabList>
            </div>
            <Outlet />
        </div>
    );
};

export default RekeningKodeLandScapeLayout;