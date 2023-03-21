import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import PermitCard from './PermitCard'
import ImageList from '@mui/material/ImageList'
import ImageListItem from '@mui/material/ImageListItem'
import Grid from '@mui/material/Unstable_Grid2'


export default function PermitGrid ({records}) {
  return (
    <ImageList cols={4}>
      {records.data.map(record => (
        <div>
          <Grid xs={4}>
            <PermitCard key={record._id} props={record}></PermitCard>
          </Grid>
        </div>
      ))}
    </ImageList>
  )
}
