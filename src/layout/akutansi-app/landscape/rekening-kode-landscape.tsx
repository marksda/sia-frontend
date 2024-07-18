import { makeStyles, Tab, TabList } from "@fluentui/react-components";
import { FC } from "react";


const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "32px auto",
        padding: "16px",
    },
    header: {
        display: "flex",
        boxShadow: "rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset",
        // width: "100%",
        // justifySelf: "center",
    }
});

const RekeningKodeLandScapeLayout: FC = () => {
    const styles = useStyles();

    return (
        <div className={styles.root}>
            <div className={styles.header}>
            <TabList defaultSelectedValue="semua" style={{flex: 1}} appearance="transparent">
                <Tab value="semua">Semua</Tab>
                <Tab value="aktiva">Aktiva</Tab>
                <Tab value="kewajiban">Kewajiban</Tab>
                <Tab value="modal">Modal</Tab>
                <Tab value="pendapatan">Pendapatan</Tab>
                <Tab value="hpp">Harga Pokok Penjualan</Tab>
                <Tab value="beban">Beban</Tab>
                <Tab value="pendapatan_lain">Pendapatan lain-lain</Tab>
                <Tab value="beban_lain">Beban lain-lain</Tab>
            </TabList>
            </div>
        </div>
    );
};

export default RekeningKodeLandScapeLayout;