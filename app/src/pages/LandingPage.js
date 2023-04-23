import React, { useEffect } from 'react'
import { Box } from '@mui/material'
import { Typography } from '@mui/material'
import ExcavatorBanner from '../components/index/ExcavatorBanner.jsx'
import ContainedButton from '../components/common/ContainedBtn.jsx'

export default function LandingPage () {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        pt: 5
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexWrap: 'wrap',
          justifyContent: 'space-between',
          alignItems: 'center',
          width: 350, height: 150
        }}
      >
        <Typography
          variant='h4'
          sx={{ color: 'black', fontWeight: 800}}
        >
          Dig efficiency?
        </Typography>
        <Typography
          variant='h6'
          sx={{ color: 'black'}}
        >
          // more tagline here
        </Typography>
        <ContainedButton></ContainedButton>
      </Box>

      {/* <Box>
        <ExcavatorBanner></ExcavatorBanner>
      </Box> */}
    </Box>
  )
}
