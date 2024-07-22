import { Button, Menu, MenuButton, MenuItem, MenuList, MenuPopover, MenuTrigger, Overflow, OverflowItem, OverflowItemProps, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { FC, useState } from "react";

//----- OverflowMenu -----//
// const useOverflowMenuStyle = makeStyles({
//     menu: {
//       backgroundColor: tokens.colorNeutralBackground1,
//     },
//     menuButton: {
//       alignSelf: "center",
//     },
// });

export type ItemBar = {
    id: string;
    nama: string;
    icon: React.ReactElement|null;
};

interface IToolBarProp {
  data: ItemBar[]
};

const ToolBar: FC<IToolBarProp> = ({data}) => {
  // const styles = useOverflowMenuStyle();
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

const OverflowSelectionItem: React.FC<{
  onSelectItem?: (item: string) => void;
  selected?: boolean;
  id: string;
}> = (props) => {
  const onClick = () => {
    props.onSelectItem?.(props.id);
  };

  return (
    <OverflowItem id={props.id} priority={props.selected ? 1000 : undefined}>
      <Button
        aria-pressed={props.selected ? "true" : "false"}
        appearance={props.selected ? "primary" : "secondary"}
        onClick={onClick}
      >
        {props.id}
      </Button>
    </OverflowItem>
  );
}

const OverflowMenuItem: React.FC<
  Pick<OverflowItemProps, "id"> & { onClick: () => void }
> = (props) => {
  const { id, onClick } = props;
  const isVisible = useIsOverflowItemVisible(id);

  if (isVisible) {
    return null;
  }

  return <MenuItem onClick={onClick}>{id}</MenuItem>;
};

const OverflowMenu: React.FC<{
  itemIds: ItemBar[];
  onSelect: (itemId: string) => void;
}> = ({ itemIds, onSelect }) => {
  const { ref, overflowCount, isOverflowing } =
    useOverflowMenu<HTMLButtonElement>();

  if (!isOverflowing) {
    return null;
  }

  return (
    <Menu>
      <MenuTrigger disableButtonEnhancement>
        <MenuButton ref={ref}>+{overflowCount} items</MenuButton>
      </MenuTrigger>

      <MenuPopover>
        <MenuList>
          {itemIds.map((i) => (
            <OverflowMenuItem onClick={() => onSelect(i.id)} key={i.id} id={i.nama} />
          ))}
        </MenuList>
      </MenuPopover>
    </Menu>
  );
};

export default ToolBar;