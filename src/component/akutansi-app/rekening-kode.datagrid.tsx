import { createTableColumn, DataGrid, DataGridBody, DataGridCell, DataGridHeader, DataGridHeaderCell, DataGridRow, TableCellLayout, TableColumnDefinition } from "@fluentui/react-components";
import { IAkun } from "../../features/entities/akutansi-app/akun";
import { FC } from "react";


interface IDataGridKodeRekeningProps {
    tab: string;
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
  
const DataGridKodeRekening: FC<IDataGridKodeRekeningProps> = ({tab}) => {
    return (<>
    { tab == "semua" ?
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
        </DataGrid> : null
    }
    </>);
};

export default DataGridKodeRekening;
  