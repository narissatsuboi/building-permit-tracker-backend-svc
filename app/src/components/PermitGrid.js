import * as React from 'react'
import PermitCard from './PermitCard'
import Grid from '@mui/material/Unstable_Grid2'

export default function PermitGrid ({ records }) {
  return (
    <Grid container>
      {
        records.data.map(record => (
          <Grid key={record._id} item xs={12} sm={6} md={3}>
            <PermitCard props={record}></PermitCard>
          </Grid>
        ))
      }
    </Grid>
  )
}
