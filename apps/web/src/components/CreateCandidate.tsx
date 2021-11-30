import { CandidateCard } from './CandidateCard';
import { FC } from 'react';
import { Box, Checkbox, FormControlLabel } from '@mui/material';
import { DataGrid } from '@mui/x-data-grid';
const rows = [
  { id: 1, lastName: 'Homee', firstName: 'iOS' },
  { id: 2, lastName: 'Homee Pro', firstName: 'Android' },
  { id: 3, lastName: 'ProAssistance', firstName: 'iOS' },
  { id: 4, lastName: 'ProAssistance Pro', firstName: 'Android' }
]

const columns = [
  { field: 'firstName', headerName: 'Platform', width: 130 },
  { field: 'lastName', headerName: 'Application', width: 200 }
];
export const CreateCandidate: FC<any> = () => {
  return (
    <>
      <DataGrid
        autoHeight={true}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
      />
      <CandidateCard id={'123'} />
    </>
  )
}
