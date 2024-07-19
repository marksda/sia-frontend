import { Button, createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, makeStyles, Menu, MenuItem, MenuItemProps, MenuList, MenuPopover, MenuTrigger, Overflow, OverflowItem, Tab, TableCellLayout, TableColumnDefinition, TabList, tokens, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { MoreHorizontal16Regular } from "@fluentui/react-icons";
import { FC, useState } from "react";
import { IAkun } from "../../../features/entities/akutansi-app/akun";

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
        padding: "8px 16px",
    },
    header: {
        overflow: "hidden",
        zIndex: 0,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset",
        height: "fit-content",
    },
    panels: {
      marginTop: "20px",
      // padding: "0 10px",
      // background: tokens.colorNeutralBackground1,
      // border: `1px solid  ${tokens.colorNeutralBackground3Selected}`,
      // boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
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
            <div className={styles.panels}>
              {selectedTabId === "semua" && <Semua />}
            </div>            
        </div>
    );
};

/*
* panel untuk semua akun
*/
const items: IAkun[] = [
  {
    id: "123",
    perusahaan: { id: "123", nama: "cso" },
    header: true,
    level: 1,
    nama: "Aktiva",
    kode: "1-0000",
    kelompok_akun: {id: "1", nama: "AKTIVA"}
  },
  {
    id: "125",
    perusahaan: { id: "123", nama: "cso" },
    header: true,
    level: 2,
    nama: "Aktiva lancar",
    kode: "1-1000",
    kelompok_akun: {id: "1", nama: "AKTIVA"}
  },
  {
    id: "126",
    perusahaan: { id: "123", nama: "cso" },
    header: false,
    level: 3,
    nama: "Kas",
    kode: "1-1001",
    kelompok_akun: {id: "1", nama: "AKTIVA"}
  },
];

const columns: TableColumnDefinition<IAkun>[] = [
  createTableColumn<IAkun>({
    columnId: "kode",
    compare: (a, b) => {
      return a.kode!.localeCompare(b.kode!);
    },
    renderHeaderCell: () => {
      return "Kode";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.kode}
        </TableCellLayout>
      );
    },
  }),
  createTableColumn<IAkun>({
    columnId: "nama",
    compare: (a, b) => {
      return a.nama!.localeCompare(b.nama!);
    },
    renderHeaderCell: () => {
      return "Nama";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.nama}
        </TableCellLayout>
      );
    }    
  }),  
  createTableColumn<IAkun>({
    columnId: "level",
    compare: (a, b) => {
      return a.level! - b.level!;
    },
    renderHeaderCell: () => {
      return "Level";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.level}
        </TableCellLayout>
      );
    }    
  }),
  createTableColumn<IAkun>({
    columnId: "header",
    compare: (a, b) => {
      return (a.header === b.header)? 0 : a.header? -1 : 1;
    },
    renderHeaderCell: () => {
      return "Header";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {`${item.header}`}
        </TableCellLayout>
      );
    }    
  }),
  createTableColumn<IAkun>({
    columnId: "kelompok",
    compare: (a, b) => {
      return a.kelompok_akun!.nama!.localeCompare(b.kelompok_akun!.nama!);
    },
    renderHeaderCell: () => {
      return "Kelompok";
    },
    renderCell: (item) => {
      return (
        <TableCellLayout>
          {item.kelompok_akun?.nama}
        </TableCellLayout>
      );
    }    
  }),
]

const Semua = () => (
  <DataGrid
    items={items}
    columns={columns}
    sortable={false}
    selectionMode="multiselect"
    getRowId={(item) => item.id}
    focusMode="composite"
    style={{ minWidth: "550px" }}
  >
    <DataGridHeader>
      <DataGridRow
        selectionCell={{
          checkboxIndicator: { "aria-label": "Select all rows" },
        }}
      >
        {({ renderHeaderCell }) => (
          <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
        )}
      </DataGridRow>
    </DataGridHeader>
    <DataGridBody<IAkun>>
      {({ item, rowId }) => (
        <DataGridRow<IAkun>
          key={rowId}
          selectionCell={{
            checkboxIndicator: { "aria-label": "Select row" },
          }}
        >
          {({ renderCell }) => (
            <DataGridCell>{renderCell(item)}</DataGridCell>
          )}
        </DataGridRow>
      )}
    </DataGridBody>
  </DataGrid>
);


export default RekeningKodeLandScapeLayout;