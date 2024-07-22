import { Overflow, OverflowItem, Tab, TabList } from "@fluentui/react-components";
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
    const [selectedTabId, setSelectedTabId] = useState<string>(data[0].id);
  
    const onTabSelect = (tabId: string) => {
      setSelectedTabId(tabId);
    };
  
    return (
        <Overflow minimumVisible={2}>
          <TabList
            selectedValue={selectedTabId}
            onTabSelect={(_, d) => onTabSelect(d.value as string)}
          >
            {data.map((item) => {
              return (
                <OverflowItem
                  key={item.id}
                  id={item.id}
                  priority={item.id === selectedTabId ? 2 : 1}
                >
                  <Tab value={item.id}>
                    {item.nama}
                  </Tab>
                </OverflowItem>
              );
            })}
          </TabList>
        </Overflow>
    );
};

export default ToolBar;