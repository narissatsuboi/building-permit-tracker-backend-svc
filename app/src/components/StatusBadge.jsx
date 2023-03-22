import * as React from 'react'
import { Box, Button, Paper, Typography,  } from '@mui/material'
import { styled } from '@mui/material/styles'

const GreenStatusBadge = styled(Button)(({ theme }) => ({
    variant: 'contained',
    color: theme.palette.primary.main, 
}))


export default function StatusBadge ({ props }) {
  return (
    <GreenStatusBadge>Green</GreenStatusBadge>
  )
}