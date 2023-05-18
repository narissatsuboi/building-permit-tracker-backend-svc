import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Box } from '@mui/material'
import axios from 'axios'
import Paginate from '../../components/common/Paginate'
import SectionHeader from '../../components/common/SectionHeader'

export default function Records () {
  let allRecords = useLoaderData()
  return (
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          height: '100vh'
        }}
      >
        <SectionHeader title='Card View' />
        <Paginate data={allRecords.data}></Paginate>
      </Box>
  )
}

export const loader = async () => {
  try {
    const res = await axios.get('http://localhost:5000/records/dev')
    // console.log(res.data)
    return res.data
  } catch (error) {
    console.log(error)
  }
}
