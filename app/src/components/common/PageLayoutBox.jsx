import React from 'react'
import { Box } from '@mui/material'

/**
 * Box component for page layout, column flex direction, centers all
 * children horizontally and pushes bottom component to bottom of the page
 */

export default function PageLayoutBox ({ children }) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100vh',
        paddingX: 5
      }}
    >
        {children}
    </Box>
  )
}
