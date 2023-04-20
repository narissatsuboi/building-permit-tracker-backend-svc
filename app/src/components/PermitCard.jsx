import * as React from 'react'
import { Box, Button, Paper, Typography,  } from '@mui/material'
import { styled } from '@mui/material/styles'
import { colorstatusMap } from './statuscolor'

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

const GreenStatusBand = styled(Box)(({ theme }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.status.green
}))

const OrangeStatusBand = styled(Box)(({ theme }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.status.orange
}))

const YellowStatusBand = styled(Box)(({ theme }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.status.yellow
}))

const RedStatusBand = styled(Box)(({ theme }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.status.red
}))

const GreyStatusBand = styled(Box)(({ theme }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.status.grey
}))

const BasicStatusBand = styled(Box)(({ theme, status }) => ({
  // display: 'flex',
  width: '100%',
  height: '50%',
  flexDirection: 'row',
  alignItems: 'flex-end',
  justifyContent: 'space-between',
  paddingBottom: theme.spacing(3),
  backgroundColor: theme.palette.status.grey 
}))

const statusBands = {
  'Meter Release': GreenStatusBand,
  'Certificate of Completion': GreenStatusBand,
  'Permit Issued': OrangeStatusBand,
  'Default': GreyStatusBand
}

const getStatusBand = (status) => {
  let StatusBand = statusBands['Default']
  if (status === 'Meter Release' || status === 'Permit Issued') {
    StatusBand = statusBands[status]
  }
  return <StatusBand />
}

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
        {getStatusBand(props.currentstatus)}
    </CustomCard>
  )
}
