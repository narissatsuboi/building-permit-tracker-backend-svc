import * as React from 'react'
import { Container } from '@mui/material'
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material'

export default function Billboard () {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center" 
      m="auto">
      <Typography
        variant="h3"
        noWrap
        align='center'
        sx={{
          fontWeight: 800,
          display: {xs: 'none', md: 'flex'}
        }}
      >
        Permit tracking 
        made sexy
      </Typography>
    </Box>

  )
}
