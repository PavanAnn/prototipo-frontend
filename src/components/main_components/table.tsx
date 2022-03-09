import { DataGrid, GridColDef } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'PostId', width: 330 },
  { field: 'title', headerName: 'Title', width: 330 },
  { field: 'author', headerName: 'Author', width: 330 },
  { field: 'body', headerName: 'Body', width: 330 },
  {
    field: 'creation_date',
    headerName: 'Creation Date',
    type: 'date',
    width: 230,
  },
  
];

const rows = [
  { id: 1, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 2, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 3, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 4, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 5, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 6, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 7, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 8, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
  { id: 9, title: 'Lorem ipsum', author: 'Jhon Doe', body: 'Dolor sit amet, consectetur adipiscing elit. Sed sed vestibulum massa.', creation_date: '12/22/2021 05:30:00 PM' },
];


export const TableList = () => {
  return(
    <div style={{ height: 579, width: '83%', margin:"auto", marginTop:50 }}>
    <DataGrid
      rows={rows}
      columns={columns}
      pageSize={10}
      rowsPerPageOptions={[10]}
      disableColumnFilter 
      
    />
  </div>
  )
}