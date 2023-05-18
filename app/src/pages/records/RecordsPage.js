import * as React from 'react'
import { useLoaderData } from 'react-router-dom'
import axios from 'axios'
import PageLayoutBox from '../../components/common/PageLayoutBox'
import Paginate from '../../components/common/Paginate'
import SectionHeader from '../../components/common/SectionHeader'

export default function Records () {
  let allRecords = useLoaderData()
  return (
      <PageLayoutBox>
        <SectionHeader title='Card View' />
        <Paginate data={allRecords.data}></Paginate>
      </PageLayoutBox>
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
