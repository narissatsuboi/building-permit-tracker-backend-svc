import * as React from 'react'
import PermitCard from './PermitCard'
import Grid from '@mui/material/Unstable_Grid2'
import Paginate from './common/Paginate.jsx'

export default function PermitGrid ({ records }) {
  return (
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
      justifyContent='left'
      marginTop={3}
    >
      {records.data.map(record => (
        <Grid item key={record._id}>
          <PermitCard props={record}></PermitCard>
        </Grid>
      ))}
    </Grid>
  )
}
