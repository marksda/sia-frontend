import { Button, makeStyles, Menu, MenuItem, MenuItemProps, MenuList, MenuPopover, MenuTrigger, Overflow, OverflowItem, Tab, TabList, tokens, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { MoreHorizontal16Regular } from "@fluentui/react-icons";
import { FC, useState } from "react";

//----data tab-----//
type KelompokAkunTab = {
    id: string;
    name: string;
};

const tabs: KelompokAkunTab[] = [
    {
      id: "semua",
      name: "Semua",
    },
    {
        id: "aktiva",
        name: "Aktiva",
    },
    {
        id: "kewajiban",
        name: "Kewajiban",
    },
    {
        id: "modal",
        name: "Modal",
    },
    {
        id: "pendapatan",
        name: "Pendapatan",
    },
    {
        id: "harga_pokok_penjualan",
        name: "Harga Pokok Penjualan",
    },
    {
        id: "beban",
        name: "Beban",
    },
    {
        id: "pendapatan_lain",
        name: "Pendapatan lain-lain",
    },
    {
        id: "beban_lain",
        name: "Beban lain-lain",
    },
];

//----- OverflowMenuItem -----//
type OverflowMenuItemProps = {
    tab: KelompokAkunTab;  
    onClick: MenuItemProps["onClick"];
};
  
const OverflowMenuItem = (props: OverflowMenuItemProps) => {
    const { tab, onClick } = props;
    const isVisible = useIsOverflowItemVisible(tab.id);
  
    if (isVisible) {
      return null;
    }
  
    return (
      <MenuItem key={tab.id} onClick={onClick}>
        <div>{tab.name}</div>
      </MenuItem>
    );
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
  
type OverflowMenuProps = {
onTabSelect?: (tabId: string) => void;
};

/**
 * A menu for selecting tabs that have overflowed and are not visible.
 */
const OverflowMenu = (props: OverflowMenuProps) => {
    const { onTabSelect } = props;
    const { ref, isOverflowing, overflowCount } = useOverflowMenu<HTMLButtonElement>();
  
    const styles = useOverflowMenuStyles();
  
    const onItemClick = (tabId: string) => {
      onTabSelect?.(tabId);
    };
  
    if (!isOverflowing) {
      return null;
    }
  
    return (
      <Menu hasIcons={false}>
        <MenuTrigger disableButtonEnhancement>
          <Button
            appearance="transparent"
            className={styles.menuButton}
            ref={ref}
            icon={<MoreHorizontal16Regular />}
            aria-label={`${overflowCount} more tabs`}
            role="tab"
          />
        </MenuTrigger>
        <MenuPopover>
          <MenuList className={styles.menu}>
            {tabs.map((tab) => (
              <OverflowMenuItem
                key={tab.id}
                tab={tab}
                onClick={() => onItemClick(tab.id)}
              />
            ))}
          </MenuList>
        </MenuPopover>
      </Menu>
    );
  };

const useStyles = makeStyles({
    root: {
        display: "grid",
        gridTemplateColumns: "auto",
        gridTemplateRows: "32px auto",
        padding: "16px",
    },
    header: {
        // display: "flex",
        overflow: "hidden",
        zIndex: 0,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset",
        height: "fit-content",
        // width: "100%",
        // justifySelf: "center",
    }
});

const RekeningKodeLandScapeLayout: FC = () => {
    const styles = useStyles();
    const [selectedTabId, setSelectedTabId] = useState<string>("semua");

    const onTabSelect = (tabId: string) => {
        setSelectedTabId(tabId);
    };

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <Overflow minimumVisible={2}>
                    <TabList 
                        selectedValue={selectedTabId}
                        onTabSelect={(_, d) => onTabSelect(d.value as string)}
                    >
                        {
                            tabs.map((tab) => {
                                return (
                                    <OverflowItem
                                        key={tab.id}
                                        id={tab.id}
                                        priority={tab.id === selectedTabId ? 2 : 1}
                                    >
                                        <Tab value={tab.id}>
                                            {tab.name}
                                        </Tab>
                                    </OverflowItem>
                                );
                            })
                        }
                        <OverflowMenu onTabSelect={onTabSelect} />
                    </TabList>
                </Overflow>            
            </div>
        </div>
    );
};

export default RekeningKodeLandScapeLayout;

{/* <TabList defaultSelectedValue="semua" style={{flex: 1}} appearance="transparent">
    <Tab value="semua">Semua</Tab>
    <Tab value="aktiva">Aktiva</Tab>
    <Tab value="kewajiban">Kewajiban</Tab>
    <Tab value="modal">Modal</Tab>
    <Tab value="pendapatan">Pendapatan</Tab>
    <Tab value="hpp">Harga Pokok Penjualan</Tab>
    <Tab value="beban">Beban</Tab>
    <Tab value="pendapatan_lain">Pendapatan lain-lain</Tab>
    <Tab value="beban_lain">Beban lain-lain</Tab>
</TabList> */}