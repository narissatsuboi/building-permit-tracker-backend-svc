/** @jsxImportSource theme-ui */
import React from 'react'
import { useLoaderData } from 'react-router-dom'
import { Grid, Card, Text, Box, Label, Input, Button } from 'theme-ui'

import RecordCard from '../../components/RecordCard'

import axios from 'axios'

// export default function Record () {
//   let records = useLoaderData()
//   return (
//     <div>
//       {records.data.map(record => (
//         <Box
//           p={5}
//           width={[1, 1, 1 / 2]}
//           // color='black'
//           bg='pink'
//           key={record.numstring}
//         >
//           {record.address}
//           {record.numstring}
//         </Box>
//       ))}
//     </div>
//   )
// }

export default function Records () {
  let records = useLoaderData()
  return (
    <div>
      {records.data.map(record => (
          <div key={record._id}>
            <Box>{record.numstring}</Box>
            <Box>{record.address}</Box>
            <Box>{record.currentstatus}</Box>
            <Box>{record.nextstatus}</Box>
          </div>
      ))}
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
