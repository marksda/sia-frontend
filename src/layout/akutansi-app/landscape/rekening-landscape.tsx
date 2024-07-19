import { makeStyles, Tab, TabList, tokens } from "@fluentui/react-components";
import { FC } from "react";
import { Outlet } from "react-router-dom";


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "200px auto",
        height: "100%",
    },
    menu: {
        padding: "16px",        
        borderRight: `1px solid  ${tokens.colorNeutralBackground3Selected}`,
        // height: "calc(100vh - 82px)",
    },
});

const RekeningLandScapeLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.menu}>
                <TabList defaultSelectedValue="akun" vertical style={{flex: 1}}>
                    <Tab value="akun">Akun</Tab>
                    <Tab value="jurnal">Jurnal</Tab>
                    <Tab value="buku_pembantu">Buku Pembantu</Tab>
                    <Tab value="buku_besar">Buku Besar</Tab>
                </TabList>
            </div>
            <Outlet />
        </div>
    );
};

export default RekeningLandScapeLayout;