import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
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
