import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export default function PermitTile({props}) {
  return (
    <Card key={props._id} sx={{ maxWidth: 275, height: 275, m: 2,}}>
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
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}