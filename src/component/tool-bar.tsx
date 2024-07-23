import { Button, makeStyles, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Overflow, OverflowItem, tokens, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { FC, useState } from "react";
import {
  BookRegular,
  BookFilled,
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  bundleIcon,
} from "@fluentui/react-icons";
import { NavLink } from "react-router-dom";

const MoreHorizontal = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);
const Book = bundleIcon(BookFilled, BookRegular);


//----- OverflowMenuItem -----//
export type ItemBar = {
    id: string;
    nama: string;
    icon: React.ReactElement|null;
};

interface IOverflowSelectionItemProps {
  onSelectItem?: (item: string) => void;  
  selected?: boolean;  
  id: string;
  nama: string;
}
const OverflowSelectionItemStyles = makeStyles({
  root: {
    display: "flex",
    flexDirection: "column",
  },
  customBackgroundColor: {
    // backgroundColor: tokens.colorBrandBackground2Hover
    // backgroundColor: tokens.colorNeutralForegroundStaticInverted,
    ':hover': {
      backgroundColor: tokens.colorBrandBackground2Hover
    }
  },
  icon24: { fontSize: "24px" },
  icon32: { fontSize: "32px" },
  icon48: { fontSize: "48px" },
});

const OverflowSelectionItem: React.FC<IOverflowSelectionItemProps> = ({id, nama, selected, onSelectItem}) => {
  const styles = OverflowSelectionItemStyles();

  // const onClick = () => {
  //   onSelectItem!(id);
  // };

  return (
    <OverflowItem id={id} priority={selected ? 1000 : undefined} >
      <li>
        <NavLink to={`/home/pembukuan/${id}`}>
          <Book className={styles.icon24}/>
        </NavLink>        
        <span>{nama}</span>
      </li>
    </OverflowItem>
  );
}

interface IOverflowMenuItemProp {
  id: string;
  onClick:  () => void;
}

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
}

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

//----- ToolBar component -----//
const useToolBarStyles = makeStyles({
  containerToolBar: {
    listStyleType: "none",
    marginTop: "4px",
    padding: "0px 8px 0px 0px",
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    // backgroundColor: tokens.colorBrandBackground,
    '& li': {
      display: "flex",
      flexDirection: "column",
    },
    '& li a': {
        display: 'flex',
        borderRadius: "16px",
        // flexDirection: "column",
        // flex: 1,
        alignItems: "center",
        justifyContent: "center",
        padding: "4px 0px",
        color: "#000",
        width: "60px",
        textDecoration: "none",
        '& svg': {
          padding: "0px",
        },
        '&.active': {
            backgroundColor: tokens.colorCompoundBrandForeground1,
            color: tokens.colorNeutralForegroundInverted,
        },
        '&:hover:not(.active)': {
            backgroundColor: "red",  
            color: tokens.colorStrokeFocus2,
        }
    }
  },
});

interface IToolBarProp {
  data: ItemBar[]
};

const ToolBar: FC<IToolBarProp> = ({data}) => {
  const styles = useToolBarStyles();
  const [selected, setSelected] = useState<string>(data[0].id);

  const onSelect = (itemId: string): void => {
    setSelected(itemId);
  };

  return (
    <Overflow>
      <nav><ul className={styles.containerToolBar}>
      {
        data.map((i) => (
          <OverflowSelectionItem
            onSelectItem={onSelect}
            key={i.id}
            id={i.id}
            nama={i.nama}
            selected={selected === i.id}
          />
          )
        )
      }
      <OverflowMenu itemIds={data} onSelect={onSelect} />
      </ul></nav>
    </Overflow>
  );
};

export default ToolBar;