import { Dropdown, DropdownProps, makeStyles, Option, useId } from "@fluentui/react-components";
import { FC, useState } from "react";
import { useGetDaftarKelompokAkunQuery } from "../../../services/api-rtkquery-service";
import DataGridKodeRekening from "../../../component/akutansi-app/rekening-kode.datagrid";
import { IQueryParamFilters } from "../../../features/entities/query-param-filters";


const useStyles = makeStyles({
    root: {
        gridTemplateRows: "48px auto",
        gridTemplateColumns: "auto",
    },    
    topToolBar: {
        padding: "4px",
        // borderBottom: `1px solid ${tokens.colorNeutralBackground3Selected}`,  
    },
    selectorContainer: {
        width: "200px",
        minWidth: "100px",
    },
    truncatedText: {
        overflowX: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
    },
});

const AkunPortraitLayout: FC = (props: Partial<DropdownProps>) => {
    const styles = useStyles();
    const dropdownId = useId("dropdownKelompokAkun");
    const [selectedKelompokAkun, setSelectedKelompokAkun] = useState("Semua");
    const [selectedOptions, setSelectedOptions] = useState<string[]>(["0",]);
    const onOptionSelect: (typeof props)["onOptionSelect"] = (_ev, data) => {
        setSelectedOptions(data.selectedOptions);
        setSelectedKelompokAkun(data.optionText ?? "");
        setFilterAkun(
            {        
              pageNumber: 1,
              pageSize: 25,
              filters: [
                {
                  fieldName: 'kelompok_akun',
                  value: data.optionValue!
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

    const { data: kelompokAkun } = useGetDaftarKelompokAkunQuery({
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

    return (
        <div className={styles.root}>
            <div className={styles.topToolBar}>
                <Dropdown 
                    aria-labelledby={`${dropdownId}-outline`}
                    appearance="outline" 
                    size="medium" 
                    value={selectedKelompokAkun}
                    selectedOptions={selectedOptions}
                    onOptionSelect={onOptionSelect}
                    button={<span className={styles.truncatedText}>{selectedKelompokAkun}</span>}
                    className={styles.selectorContainer}
                >
                    <Option key="0" text="Semua" value="0">
                        Semua
                    </Option>
                {
                kelompokAkun != undefined ? 
                    kelompokAkun.map((i) => (
                    <Option key={i.id} text={i.nama!} value={i.id!}>
                        {i.nama!}
                    </Option>
                    )) : null
                }
                </Dropdown>
            </div>
            <DataGridKodeRekening 
                key={selectedOptions[0]}
                initSelectedFilters={filterAkun}
            />
        </div>
    );
};

export default AkunPortraitLayout;