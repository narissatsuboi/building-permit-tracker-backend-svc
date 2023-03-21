import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import Box from '@mui/material/Box'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Grid from '@mui/material/Unstable_Grid2'
import PermitCard from '../../components/PermitCard'
import PermitGrid from '../../components/PermitGrid'

export default function Records () {
  let recs = useLoaderData()
return (
  <PermitGrid records={recs}></PermitGrid>
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
