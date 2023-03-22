/** @jsxImportSource theme-ui */
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Tile from '../../components/Tile'
import PermitTile from '../../components/PermitTile'
import axios from 'axios'
import PermitGrid from '../../components/PermitGrid'

export default function Records () {
  let records = useLoaderData()
  // return (
  //   <div>
  //     {records.data.map(record => (
  //       <div key={record._id}>
  //         {record.numstring}
  //         {record.address}
  //         {record.currentstatus}
  //         {record.nextstatus}
  //       </div>
  //     ))}
  //   </div>
  // )

  return (
    <div>
    <Tile></Tile>
    </div>
  )
}

export const loader = async () => {
  try {
    const res = await axios.get('http://localhost:5000/records')
    return res.data
  } catch (error) {
    console.log(error)
  }
}
