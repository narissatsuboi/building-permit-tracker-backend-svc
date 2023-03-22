import * as React from 'react'
import { Box, Button, Paper, Typography,  } from '@mui/material'
import { styled } from '@mui/material/styles'

const CustomCard = styled(Paper)(({ theme }) => ({
  display: 'flex',
  flex: 1,
  flexDirection: 'column',
  alignItems: 'flex-start',
  minWidth: 225,
  maxWidth: 225,
  minHeight: 225,
  maxHeight: 225,
  boxShadow: theme.shadows[2]
}))

const StatusBand = styled(Box)(({ theme }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: 'pink'
}))

export default function PermitTile ({ props }) {
  return (
    <CustomCard key={props._id}>
      <Box
        sx={{
          display: 'flex',
          flex: 1,
          flexDirection: 'column',
          alignItems: 'flex-start',
          pt: 4,
          px: 2
        }}
      >
        <Typography sx={{ fontSize: 14 }} color='text.secondary' gutterBottom>
          {props.address}
        </Typography>
        <Typography variant='h5' component='div'>
          {props.numstring}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color='text.secondary'>
          {props.type}
        </Typography>
      </Box>
        <StatusBand></StatusBand>
    </CustomCard>
  )
}
