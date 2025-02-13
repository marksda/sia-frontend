import { Button, makeStyles, Menu, MenuItem, MenuItemProps, MenuList, MenuPopover, MenuTrigger, Overflow, OverflowItem, Tab, TabList, tokens, useIsOverflowItemVisible, useOverflowMenu } from "@fluentui/react-components";
import { MoreHorizontal16Regular } from "@fluentui/react-icons";
import { FC, useState } from "react";
import DataGridKodeRekening from "../../../component/akutansi-app/rekening-kode.datagrid";
import { IKelompokAkun } from "../../../features/entities/akutansi-app/kelompok-akun";
import { IQueryParamFilters } from "../../../features/entities/query-param-filters";
import { useGetDaftarKelompokAkunQuery } from "../../../services/api-rtkquery-service";

//----data tab-----//
// type KelompokAkunTab = {
//     id: string;
//     name: string;
// };

// const tabs: KelompokAkunTab[] = [
//     {
//       id: "semua",
//       name: "Semua",
//     },
//     {
//         id: "aktiva",
//         name: "Aktiva",
//     },
//     {
//         id: "kewajiban",
//         name: "Kewajiban",
//     },
//     {
//         id: "modal",
//         name: "Modal",
//     },
//     {
//         id: "pendapatan",
//         name: "Pendapatan",
//     },
//     {
//         id: "harga_pokok_penjualan",
//         name: "Harga Pokok Penjualan",
//     },
//     {
//         id: "beban",
//         name: "Beban",
//     },
//     {
//         id: "pendapatan_lain",
//         name: "Pendapatan lain-lain",
//     },
//     {
//         id: "beban_lain",
//         name: "Beban lain-lain",
//     },
// ];

//----- OverflowMenuItem -----//
type OverflowMenuItemProps = {
    // tab: KelompokAkunTab;  
    tab: IKelompokAkun;
    onClick: MenuItemProps["onClick"];
};
  
const OverflowMenuItem = (props: OverflowMenuItemProps) => {
    const { tab, onClick } = props;
    const isVisible = useIsOverflowItemVisible(tab.id!);
  
    if (isVisible) {
      return null;
    }
  
    return (
      <MenuItem key={tab.id} onClick={onClick}>
        <div>{tab.nama}</div>
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
  tabs: IKelompokAkun[];
  onTabSelect?: (tabId: string) => void;
};

/**
 * A menu for selecting tabs that have overflowed and are not visible.
 */
const OverflowMenu = (props: OverflowMenuProps) => {
    const { tabs, onTabSelect } = props;
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
                onClick={() => onItemClick(tab.id!)}
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
        gridTemplateRows: "64px auto",
        padding: "8px 16px",
    },
    header: {
        overflow: "hidden",
        zIndex: 0,
        boxShadow: "rgba(0, 0, 0, 0.1) 0px -1px 0px 0px inset",
        height: "fit-content",
    },
    panels: {
      // marginTop: "20px",
      // padding: "0 10px",
      // background: tokens.colorNeutralBackground1,
      // border: `1px solid  ${tokens.colorNeutralBackground3Selected}`,
      // boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px",
    }
});

const AkunLandScapeLayout: FC = () => {
    const styles = useStyles();    
    const [selectedTabId, setSelectedTabId] = useState<string>("0");
    const [filterAkun, setFilterAkun] = useState<IQueryParamFilters>({
      pageNumber: 1,
      pageSize: 25,
      filters: [
        {
          fieldName: 'kelompok_akun',
          value: '0'
        },
      ],
      sortOrders: [
        {
          fieldName: 'id',
          value: 'ASC'
        },
      ],
    });
    const { data: tabs } = useGetDaftarKelompokAkunQuery({
      pageNumber: 1,
      pageSize: 25,
      filters: [],
      sortOrders: [
        {
          fieldName: 'id',
          value: 'ASC'
        },
      ],
    });

    const onTabSelect = (tabId: string) => {
      setSelectedTabId(tabId);
      setFilterAkun(
        {        
          pageNumber: 1,
          pageSize: 25,
          filters: [
            {
              fieldName: 'kelompok_akun',
              value: tabId
            },
          ],
          sortOrders: [
            {
              fieldName: 'id',
              value: 'ASC'
            },
          ],
        }
      );
    };

    return (
        <div className={styles.root}>
          {tabs != undefined && 
            <div className={styles.header}>
                <Overflow minimumVisible={2}>
                    <TabList 
                        selectedValue={selectedTabId}
                        onTabSelect={(_, d) => onTabSelect(d.value as string)}
                    >
                      <OverflowItem
                        key="0"
                        id="0"
                        priority={"0" === selectedTabId ? 2 : 1}
                      >
                        <Tab value="0">
                          Semua
                        </Tab>
                      </OverflowItem>
                      {
                        tabs.map((tab) => {
                          return (
                            <OverflowItem
                              key={tab.id!}
                              id={tab.id!}
                              priority={tab.id === selectedTabId ? 2 : 1}
                            >
                              <Tab value={tab.id!}>
                                {tab.nama}
                              </Tab>
                            </OverflowItem>
                          );
                        })
                      }
                      <OverflowMenu tabs={tabs} onTabSelect={onTabSelect} />
                    </TabList>
                </Overflow>            
            </div>
          }
          {tabs != undefined && 
            <div className={styles.panels}>
              <DataGridKodeRekening 
                key={selectedTabId}
                initSelectedFilters={filterAkun}
              />
            </div> 
          }           
        </div>
    );
};

export default AkunLandScapeLayout;