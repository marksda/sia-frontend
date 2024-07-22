import { Button, makeStyles, Menu, MenuItem, MenuList, MenuPopover, MenuTrigger, Overflow, OverflowItem, tokens, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { FC, useState } from "react";
import {
  MoreHorizontalRegular,
  MoreHorizontalFilled,
  bundleIcon,
} from "@fluentui/react-icons";

const MoreHorizontal = bundleIcon(MoreHorizontalFilled, MoreHorizontalRegular);


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
}

const OverflowSelectionItem: React.FC<IOverflowSelectionItemProps> = ({id, selected, onSelectItem}) => {
  const onClick = () => {
    onSelectItem!(id);
  };

  return (
    <OverflowItem id={id} priority={selected ? 1000 : undefined}>
      <Button
        aria-pressed={selected ? "true" : "false"}
        appearance={selected ? "primary" : "secondary"}
        onClick={onClick}
      >
        {id}
      </Button>
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
  root: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    padding: "8px",
  },
});

interface IToolBarProp {
  data: ItemBar[]
};

const ToolBar: FC<IToolBarProp> = ({data}) => {
  const styles = useToolBarStyles();
  const [selected, setSelected] = useState<string>(data[0].id);

  const onSelect = (itemId: string) => {
    setSelected(itemId);
  };

  return (
    <Overflow>
      <div>
      {
        data.map((i) => (
          <OverflowSelectionItem
            onSelectItem={onSelect}
            key={i.id}
            id={i.nama}
            selected={selected === i.id}
          />
          )
        )
      }
      <OverflowMenu itemIds={data} onSelect={onSelect} />
      </div>
    </Overflow>
  );
};

export default ToolBar;