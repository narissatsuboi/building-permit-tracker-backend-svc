import React from 'react'
import { Box, Typography } from '@mui/material'   



export default function SectionHeader( props ) {
  return (
    <Box sx={{
        pt: '1%', 
        pb: '2%',
    }}>
        <Typography variant="h4">
            {props.title}
        </Typography>
    </Box>
  )
}
