import { makeStyles, tokens, Tooltip } from "@fluentui/react-components";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { BookRegular } from "@fluentui/react-icons";


const useStyles = makeStyles({
    containerMenu: {
        listStyleType: "none",
        marginTop: "0px",
        padding: "0px 8px 0px 0px",
        // backgroundColor: "rgb(247 247 247)",
        '& li a': {
            display: "block",
            padding: "12px 0px 12px 24px",
            color: "#000",
            textDecoration: "none",
            // lineHeight: "24px",
            '&.active': {
                backgroundColor: tokens.colorNeutralBackground2Selected,
                color: "colorStrokeFocus2",
                // borderLeft: "4px solid #0f6cbd"
            },
            '&:hover:not(.active)': {
                backgroundColor: tokens.colorNeutralBackground2Hover,  // "rgb(200 200 201)",
                color: "colorStrokeFocus2"
            }
        }
    },
    containerMiniMenu: {
        height: "calc(100vh - 40px)",
        borderRight: `1px solid ${tokens.colorNeutralBackground3Selected}`,
        listStyleType: "none",
        margin: "0px",
        padding: "0px",
        '& li:nth-child(1)': {
            paddingTop: "2px",
        },
        '& li a': {
            display: "block",
            padding: "8px 8px 8px 8px",
            color: "#000",
            textDecoration: "none",
            '&.active': {
                backgroundColor: tokens.colorNeutralBackground2Selected,
                color: tokens.colorBrandBackground,
                borderLeft: "4px solid #0f6cbd"
            },
            '&:not(.active)': {
                borderLeft: "4px solid rgba(255,255,255,.5)"
            },
            '&:hover:not(.active)': {
                backgroundColor: tokens.colorNeutralBackground2Hover,  // "rgb(200 200 201)",
                color: "colorStrokeFocus2"
            }
        }
    },
    icon24: { fontSize: "24px" },
    icon32: { fontSize: "32px" },
    icon48: { fontSize: "48px" },
    tooltip: {
        backgroundColor: tokens.colorBrandBackground,
        color: tokens.colorNeutralForegroundInverted,
    },
});

interface IPaneNavigatorProp {
    mini: boolean;
    show?: boolean;
};

const PaneNavigator: FC<IPaneNavigatorProp> = ({mini, show}) => {
    const styles = useStyles();

    return mini == false ?
        <nav>
            <ul className={styles.containerMenu}>
                <li>
                    <NavLink to="/home/rekening">Rekening</NavLink>
                </li>
                <li>
                    <NavLink to="/home/laporan">Laporan</NavLink>
                </li>
                <li>
                    <NavLink to="/home/pengaturan">Pengaturan</NavLink>
                </li>
            </ul>            
        </nav>
        :
        show == true ? 
        <nav>
            <ul className={styles.containerMiniMenu}>                
                <li>
                    <Tooltip 
                        content={{ children: "Rekening", className: styles.tooltip }} 
                        relationship="label" 
                        withArrow
                        positioning="after"
                    >
                        <NavLink to="/home/rekening">                            
                            <BookRegular className={styles.icon24}/>                            
                        </NavLink>
                    
                    </Tooltip>
                </li>
                <li>
                    <Tooltip 
                        content={{ children: "Laporan", className: styles.tooltip }} 
                        relationship="label" 
                        withArrow
                        positioning="after"
                    >
                        <NavLink to="/home/laporan">
                            <BookRegular className={styles.icon24}/>
                        </NavLink>
                    </Tooltip>
                </li>
                <li>
                    <NavLink to="/home/pengaturan">
                        <BookRegular className={styles.icon24}/>
                    </NavLink>
                </li>
            </ul>            
        </nav> : null;
};

export default PaneNavigator;