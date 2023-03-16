import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2'
import PermitTile from '../../components/PermitTile'

export default function Records () {
  let records = useLoaderData()
return (
  <ImageList cols={4}>
    {records.data.map(record => (
      <div>
        <Grid xs={4}>
          <PermitTile key={record._id} props={record}></PermitTile>
        </Grid>
      </div>
    ))}
  </ImageList>
  )
}

export const loader = async () => {
  try {
    const res = await axios.get('http://localhost:5000/records/dev')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
