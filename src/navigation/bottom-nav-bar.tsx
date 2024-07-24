import { Button, makeStyles, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, mergeClasses, Overflow, OverflowItem, tokens, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { FC, useState } from "react";
import {
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  bundleIcon,
} from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";
import { ItemBar } from "../features/entities/item-bar";

const MoreHorizontal = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);

interface IOverflowSelectionItemProps {
  selected?: boolean;  
  id: string;
  nama: string;
  icon: React.ReactElement|null;
};

const OverflowSelectionItem: React.FC<IOverflowSelectionItemProps> = ({id, nama, selected, icon}) => {
  return (
    <OverflowItem id={id} priority={selected ? 1000 : undefined} >
        <NavLink to={`/home/pembukuan/${id}`}>
            <div>{icon}</div>
            <span>{nama}</span>            
        </NavLink>     
    </OverflowItem>
  );
};

interface IOverflowMenuItemProp {
  id: string;
  onClick:  () => void;
};

const OverflowMenuItem: React.FC<IOverflowMenuItemProp> = ({id, onClick}) => {
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem onClick={onClick}>{id}</MenuItem>;
};

//----- OverflowMenu -----//
const useOverflowMenuStyles = makeStyles({
  menu: {
    backgroundColor: tokens.colorNeutralBackground1,
  },
  menuButton: {
    alignSelf: "center",
  },
});

interface IOverflowMenuProps {
  itemIds: ItemBar[]; 
  onSelect: (itemId: string) => void;
};

const OverflowMenu: React.FC<IOverflowMenuProps> = ({ itemIds, onSelect }) => {
  const styles = useOverflowMenuStyles();
  const { ref, overflowCount, isOverflowing } = useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  const onItemClick = (tabId: string) => {
    onSelect?.(tabId);
  };

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <Button
          appearance="transparent"
          className={styles.menuButton}
          ref={ref}
          icon={<MoreHorizontal />}
          aria-label={`${overflowCount} more tabs`}
          role="tab"
        />
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => (
            <OverflowMenuItem 
              key={i.id} 
              id={i.nama} 
              onClick={() => onItemClick(i.id!)} 
            />
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

//----- BottomNavBar component -----//
const useBottomNavBarStyles = makeStyles({    
  container: {  
    display: "flex",
    flexWrap: "nowrap",
    minWidth: 0,
    overflow: "hidden",
    justifyContent: "center",
  },
  item: {        
    '& a': {           
        display: "inline-block",   
        textDecoration: "none",   
        '& span': {
            display: "inline-block", 
            textAlign: "center", 
            width: "60px",
            color: tokens.colorStrokeFocus2,
        }, 
        '&.active': {                         
            "& div" : {                     
                backgroundColor: tokens.colorCompoundBrandForeground1,  
                color: tokens.colorNeutralForegroundInverted, 
                padding: "0px 18px",             
                borderRadius: "16px", 
            }  
        },
        ':not(.active) div': {
            color: tokens.colorStrokeFocus2,
            padding: "0px 18px",  
        },
        '& svg': {
            paddingTop: "4px",
        },        
    },
  }
});

interface IBottomNavBarProp {
  data: ItemBar[];
};

const BottomNavBar: FC<IBottomNavBarProp> = ({data}) => {
  const styles = useBottomNavBarStyles();
  const [selected, setSelected] = useState<string>(data[0].id);

  const onSelect = (itemId: string): void => {
    setSelected(itemId);
  };

  return (
    <Overflow>
        <div className={ mergeClasses(styles.container, styles.item)}>
            <nav>
                {
                data.map((i) => (
                    <OverflowSelectionItem
                        key={i.id}
                        id={i.id}
                        nama={i.nama}
                        icon={i.icon}
                        selected={selected === i.id}
                    />
                    )
                )
                }
            </nav>            
            <OverflowMenu itemIds={data} onSelect={onSelect} />
        </div>
    </Overflow>
  );
};

export default BottomNavBar;