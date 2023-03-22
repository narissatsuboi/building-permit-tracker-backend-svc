import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles'

const CustomCard = styled(Card)(({ theme }) => ({
  minWidth: 225,
  maxWidth: 225,
  minHeight: 225,
  maxHeight: 225,
  boxShadow: theme.shadows[2]
}));

export default function PermitTile({props}) {
  return (
    <CustomCard 
    key={props._id}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {props.address}
        </Typography>
        <Typography variant="h5" component="div">
          {props.numstring}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          Building Permit
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </CustomCard>
  );
}