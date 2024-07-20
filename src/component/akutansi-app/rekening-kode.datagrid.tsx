import { createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, TableCellLayout, TableColumnDefinition } from "@fluentui/react-components";
import { IAkun } from "../../features/entities/akutansi-app/akun";
import { FC, useState } from "react";
import { useGetDaftarAkunQuery } from "../../services/api-rtkquery-service";
import { IQueryParamFilters } from "../../features/entities/query-param-filters";


interface IDataGridKodeRekeningProps {
    tab: string;
    initSelectedFilters: IQueryParamFilters;
};
  
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
  
const DataGridKodeRekening: FC<IDataGridKodeRekeningProps> = ({tab, initSelectedFilters}) => {
    const [currentPage] = useState<number>(initSelectedFilters.pageNumber!);
    const [pageSize] = useState<number>(initSelectedFilters.pageSize!);
    const [queryParams] = useState<IQueryParamFilters>({
        ...initSelectedFilters, pageNumber: currentPage, pageSize
    });
    const { data: items, isLoading } = useGetDaftarAkunQuery(queryParams);
    return (<>
    { tab == "0" ?
        <DataGrid
            items={isLoading == true ? [] : items!}
            columns={columns}
            sortable={true}
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
        </DataGrid> : null
    }
    </>);
};

export default DataGridKodeRekening;
  