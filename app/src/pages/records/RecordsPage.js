import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import PermitGrid from '../../components/PermitGrid'
import { Box } from '@mui/material'
import Paginate from '../../components/common/Paginate'

export default function Records () {
  let allRecords = useLoaderData()
return (
    <Paginate data={allRecords.data}></Paginate>
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
