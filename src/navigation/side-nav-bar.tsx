import { makeStyles, tokens, Tooltip } from "@fluentui/react-components";
import { FC } from "react";
import { NavLink } from "react-router-dom";
import { ItemBar } from "../features/entities/item-bar";


const useStyles = makeStyles({
    rootMini: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "2px",
        '& a': {
            display: "block",
            margin: "4px",
            paddingLeft: "4px",
            color: "#000",
            textDecoration: "none",
            '& svg': {
                paddingTop: "4px",
            },  
            '&.active': {
                color: tokens.colorBrandBackground,
                borderLeft: "4px solid #0f6cbd"
            },
            '&:not(.active)': {
                borderLeft: "4px solid transparent"
            },
            '&:hover:not(.active)': {
                backgroundColor: tokens.colorNeutralBackground2Hover,  
                color: "colorStrokeFocus2"
            }
        }
    },
    rootStandart: {
        display: "flex",
        flexDirection: "column",
        paddingTop: "2px",
        '& a': {
            display: "flex",
            alignItems: 'center',
            margin: "4px",
            padding: "8px",
            color: "#000",
            textDecoration: "none",
            '& svg': {
                // paddingTop: "4px",
            },  
            '& span': {
                marginLeft: "8px",
            },
            '&.active': {
                backgroundColor: tokens.colorNeutralBackground2Hover,
                color: "colorStrokeFocus2",
            },
            '&:hover:not(.active)': {
                backgroundColor: tokens.colorNeutralBackground2Hover,  
                color: "colorStrokeFocus2"
            }
        },
    },
    tooltip: {
        backgroundColor: tokens.colorBrandBackground,
        color: tokens.colorNeutralForegroundInverted,
    },
});

interface ISideNavBarProp {
    data: ItemBar[];
    hide?: boolean;
    type: string;
    setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const SideNavBar: FC<ISideNavBarProp> = ({type, hide, data, setIsOpen}) => {
    const styles = useStyles();

    const _handleCloseDrawer = () => {
        setIsOpen!(false);
    }

    return hide == false ? 
            type == "mini" ?
                <nav className={styles.rootMini}>
                    {
                        data.map((i) => (
                            <Tooltip 
                                content={{ children: i.nama, className: styles.tooltip }} 
                                relationship="label" 
                                withArrow
                                positioning="after"
                            >
                                <NavLink to={i.link}>                            
                                    {i.icon}                           
                                </NavLink>                            
                            </Tooltip>
                            )
                        )
                    }    
                </nav> : type == "permanent" ?
                <nav className={styles.rootStandart}>
                {
                    data.map((i) => (
                            <NavLink to={i.link}>                            
                                {i.icon}   
                                <span>{i.nama}</span>                        
                            </NavLink> 
                        )
                    )
                }    
                </nav>:
                <nav className={styles.rootStandart} onClick={_handleCloseDrawer}>
                {
                    data.map((i) => (
                            <NavLink to={i.link}>                            
                                {i.icon}   
                                <span>{i.nama}</span>                        
                            </NavLink> 
                        )
                    )
                }    
                </nav>
            : null;
};

export default SideNavBar;