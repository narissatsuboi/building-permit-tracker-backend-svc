import React, { useState } from 'react'
import { Box, Grid } from '@mui/material'
import { Pagination } from '@mui/material'
import usePagination from './usePagination' // custom hook
import PermitCard from '../PermitCard'

export default function Paginate ({ data }) {
  const [currentPage, setCurrentPage] = useState(1)
  const PER_PAGE = 16
  const count = Math.ceil(data.length / PER_PAGE)
  const PAGINATED_DATA = usePagination(data, PER_PAGE)

  const handlePageChange = (e, page) => {
    setCurrentPage(page)
    PAGINATED_DATA.onJump(page)
  }

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        justifyContent='center'
        marginTop={3}
      >
        {PAGINATED_DATA.currentData().map(record => {
          return (
            <Grid item key={record._id}>
              <PermitCard props={record}></PermitCard>
            </Grid>
          )
        })}
      </Grid>
      <Pagination
        count={count}
        size='large'
        page={currentPage}
        variant='outlined'
        shape='rounded'
        onChange={handlePageChange}
      ></Pagination>
    </>
  )
}
