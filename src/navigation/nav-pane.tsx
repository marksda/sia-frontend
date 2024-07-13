import { makeStyles } from "@fluentui/react-components";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
    containerMenu: {
        listStyleType: "none",
        padding: "0px",
        backgroundColor: "#f1f1f1",
        '& li a': {
            display: "block",
            padding: "8px 16px",
            color: "#000",
            textDecoration: "none",
            '&.active': {
                backgroundColor: "#04AA6D",
                color: "white"
            }
        }
    },

});
const PaneNavigator = () => {
    const styles = useStyles();

    return (
        <nav>
            <ul className={styles.containerMenu}>
                <li>
                    <NavLink to="/messages" className="active">
                    Rekening
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/messages">
                    Laporan
                    </NavLink>
                </li>
            </ul>            
        </nav>
    );
};

export default PaneNavigator;

