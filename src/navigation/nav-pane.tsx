import { makeStyles, tokens } from "@fluentui/react-components";
import { NavLink } from "react-router-dom";


const useStyles = makeStyles({
    containerMenu: {
        listStyleType: "none",
        padding: "0px 8px 0px 0px",
        // backgroundColor: "rgb(247 247 247)",
        '& li a': {
            display: "block",
            padding: "12px",
            color: "#000",
            textDecoration: "none",
            // lineHeight: "24px",
            '&.active': {
                backgroundColor: tokens.colorBrandBackgroundSelected,
                color: "white",
                // borderLeft: "4px solid #0f6cbd"
            },
            '&:hover:not(.active)': {
                backgroundColor: tokens.colorBrandBackground2Hover,  // "rgb(200 200 201)",
                color: "black"
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
                    <NavLink to="/messages" className="active">Rekening</NavLink>
                </li>
                <li>
                    <NavLink to="/messages">Laporan</NavLink>
                </li>
                <li>
                    <NavLink to="/messages">Pengaturan</NavLink>
                </li>
            </ul>            
        </nav>
    );
};

export default PaneNavigator;

